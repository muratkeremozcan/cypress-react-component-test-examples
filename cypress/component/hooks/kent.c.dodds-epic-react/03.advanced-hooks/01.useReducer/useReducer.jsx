// github.com/muratkeremozcan/epic-react/blob/main/03.advanced-react-hooks/src/exercise/01.js

import { useReducer } from 'react'

/* [1] Why useReducer?
  When state values are related, affecting each other or being changed together
  it can help to move the state update logic into a single place
  rather than spreading the code that performs changes across event handler functions like this:

  const changeGroup = (event) => {
    setGroup(event.target.value)
    setBookableIndex(0)
  }

  (1)
  React gives us the useReducer hook to help us manage this collocation of state update logic

  const [state, dispatch] = useReducer(reducer, initialState)

	dispatch calls the reducer with an action

  (2)
  A reducer is a function that accepts a state value and an action value.
  It generates a new state value based on the two values passed in, then returns the new state value.

  const reducer = (state, action) => a newState which is an operational result of state & action

  (3)
  lazy init: if you pass a third function argument to useReducer, it passes the second argument to that function
  and uses the return value for the initial state.
  This could be useful if our init function read into localStorage or something else
  that we wouldn't want happening every re-render.

  const [state, dispatch] = useReducer(reducer, initialState, init)

  */

const countReducer = (state, action) => {
  const { count } = state
  const { type, step } = action

  switch (type) {
    case 'INCREMENT': {
      return { ...state, count: count + step }
    }
    case 'DECREMENT': {
      return { ...state, count: count - step }
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`)
    }
  }
}

export default function Counter({ initialCount = 0, step = 1 }) {
  const [state, dispatch] = useReducer(countReducer, {
    count: initialCount
  })

  const increment = () => dispatch({ type: 'INCREMENT', step })
  const decrement = () => dispatch({ type: 'DECREMENT', step })

  const { count } = state
  return (
    <>
      <button data-cy="+" onClick={increment}>
        +
      </button>
      <p data-cy="count">{count}</p>
      <button data-cy="-" onClick={decrement}>
        -
      </button>
    </>
  )
}
