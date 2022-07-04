// Context Module Functions
// http://localhost:3000/isolated/exercise/01.js

import * as React from 'react'
import { dequal } from 'dequal'

// ./context/user-context.js

import * as userClient from './user-client'
import { useAuth } from './auth-context'

const UserContext = React.createContext()
UserContext.displayName = 'UserContext'

function userReducer(state, action) {
  switch (action.type) {
    case 'start update': {
      return {
        ...state,
        user: { ...state.user, ...action.updates },
        status: 'pending',
        storedUser: state.user
      }
    }
    case 'finish update': {
      return {
        ...state,
        user: action.updatedUser,
        status: 'resolved',
        storedUser: null,
        error: null
      }
    }
    case 'fail update': {
      return {
        ...state,
        status: 'rejected',
        error: action.error,
        user: state.storedUser,
        storedUser: null
      }
    }
    case 'reset': {
      return {
        ...state,
        status: null,
        error: null
      }
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`)
    }
  }
}

function UserProvider({ children }) {
  const { user } = useAuth()
  const [state, dispatch] = React.useReducer(userReducer, {
    status: null,
    error: null,
    storedUser: user,
    user
  })
  const value = [state, dispatch]
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}

function useUser() {
  const context = React.useContext(UserContext)
  if (context === undefined) {
    throw new Error(`useUser must be used within a UserProvider`)
  }
  return context
}

// KEY IDEA: implement the dispatch helpers at the api / provider
// so that the users of the Provider do not have to duplicate the implementation

// 🐨 add a function here called `updateUser`
// Then go down to the `handleSubmit` from `UserSettings` and put that logic in
// this function. It should accept: dispatch, user, and updates
// https://twitter.com/dan_abramov/status/1125773153584676864
const updateUser = (dispatch, user, updates) => {
  dispatch({ type: 'start update', updates })

  return userClient.updateUser(user, updates).then(
    (updatedUser) => dispatch({ type: 'finish update', updatedUser }),
    (error) => dispatch({ type: 'fail update', error })
  )
}
// export {UserProvider, useUser, updateUser}

// src/screens/user-profile.js
// import {UserProvider, useUser, updateUser} from './context/user-context'
function UserSettings() {
  const [{ user, status, error }, userDispatch] = useUser()

  const isPending = status === 'pending'
  const isRejected = status === 'rejected'

  const [formState, setFormState] = React.useState(user)

  const isChanged = !dequal(user, formState)

  function handleChange(e) {
    setFormState({ ...formState, [e.target.name]: e.target.value })
  }

  function handleSubmit(event) {
    event.preventDefault()
    // 🐨 move the following logic to the `updateUser` function you create above
    // userDispatch({type: 'start update', updates: formState})
    // userClient.updateUser(user, formState).then(
    //   updatedUser => userDispatch({type: 'finish update', updatedUser}),
    //   error => userDispatch({type: 'fail update', error}),
    // )
    updateUser(userDispatch, user, formState)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div style={{ marginBottom: 12 }}>
        <label style={{ display: 'block' }} htmlFor="username">
          Username
        </label>
        <input
          id="username"
          name="username"
          disabled
          readOnly
          value={formState.username}
          style={{ width: '100%' }}
        />
      </div>
      <div style={{ marginBottom: 12 }}>
        <label style={{ display: 'block' }} htmlFor="tagline">
          Tagline
        </label>
        <input
          id="tagline"
          name="tagline"
          value={formState.tagline}
          onChange={handleChange}
          style={{ width: '100%' }}
        />
      </div>
      <div style={{ marginBottom: 12 }}>
        <label style={{ display: 'block' }} htmlFor="bio">
          Biography
        </label>
        <textarea
          id="bio"
          name="bio"
          value={formState.bio}
          onChange={handleChange}
          style={{ width: '100%' }}
        />
      </div>
      <div>
        <button
          type="button"
          onClick={() => {
            setFormState(user)
            userDispatch({ type: 'reset' })
          }}
          disabled={!isChanged || isPending}
        >
          Reset
        </button>
        <button
          type="submit"
          disabled={(!isChanged && !isRejected) || isPending}
        >
          {isPending
            ? '...'
            : isRejected
            ? '✖ Try again'
            : isChanged
            ? 'Submit'
            : '✔'}
        </button>
        {isRejected ? (
          <pre style={{ color: 'red' }}>{error.message}</pre>
        ) : null}
      </div>
    </form>
  )
}

function UserDataDisplay() {
  const [{ user }] = useUser()
  return <pre>{JSON.stringify(user, null, 2)}</pre>
}

// function App() {
//   return (
//     <div
//       style={{
//         minHeight: 350,
//         width: 300,
//         backgroundColor: '#ddd',
//         borderRadius: 4,
//         padding: 10
//       }}
//     >
//       <UserProvider>
//         <UserSettings />
//         <UserDataDisplay />
//       </UserProvider>
//     </div>
//   )
// }

// export default App

describe('Context module functions', () => {
  it(' implement the dispatch helpers at the api / provider to save duplication', () => {
    cy.mount(
      <div
        style={{
          minHeight: 350,
          width: 300,
          backgroundColor: '#ddd',
          borderRadius: 4,
          padding: 10
        }}
      >
        <UserProvider>
          <UserSettings />
          <UserDataDisplay />
        </UserProvider>
      </div>
    )

    const tagLine = 'Hello World'
    const bio = 'I am a bio'

    cy.get('#tagline').type(tagLine)
    cy.get('#bio').type(bio)
    cy.get('[type="submit"]').click()
    cy.get('pre').should('contain', tagLine).and('contain', bio)

    cy.get('#tagline').type('{backspace}')
    cy.get('#bio').type('{backspace}')
    cy.get('[type="submit"]').click()
    cy.get('pre').should('not.contain', tagLine).and('not.contain', bio)
    cy.get('pre')
      .should('contain', tagLine.slice(0, -1))
      .and('contain', bio.slice(0, -1))

    cy.get('#tagline').type('d')
    cy.get('[type="button"]').should('be.enabled').click()
    cy.get('[type="button"]').should('be.disabled')
    cy.get('pre').should('contain', tagLine.slice(0, -1))
  })
})
