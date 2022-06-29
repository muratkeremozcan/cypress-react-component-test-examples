// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({ onSubmitUsername }) {
  // [6] TL,DR; (0)
  // form needs an onSubmit={submitHandler}
  // inputs in the form need id attribute and their labels need htmlFor attribute
  // submitHandler needs to event.preventDefault(),
  // and call setState fn with the input value as event.target.value
  // (2) using useState: we can use this hook to manage state and handle changes such as an error state
  // (3) we can control form inputs via React: <input value={myInputValue} />
  // typically the input's value is managed with useState, and an onChange handler is used to set the state

  const [userName, setUserName] = React.useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    return onSubmitUsername(userName)
  }

  const handleChange = (event) => setUserName(event.target.value.toLowerCase())

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="userNameInput">Username:</label>
        <input
          id="userNameInput"
          type="text"
          value={userName}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = (username) => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
