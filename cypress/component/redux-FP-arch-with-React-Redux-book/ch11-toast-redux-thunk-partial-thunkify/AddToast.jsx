import React from 'react'
import { connect } from 'react-redux'
import { partial, curry } from 'lodash'
import * as R from 'ramda'
import thunkify from 'thunkify'
import * as actions from './toasts/actions'
import { v4 as uuidv4 } from 'uuid'

// Asynchronous Actions
// There are situations when we want to do asynchronous tasks like sending timer events
// or doing network requests.
// Both these tasks are impure and cannot be executed inside the pure update functions.

// Redux Thunk is a middleware for Redux that allows writing a new kind of action creators
// that return a function instead of an action. The returned function is called a thunk.
// With Redux Thunk we can dispatch plain objects and functions as actions.
// Dispatching plain objects modifies the state.
// Dispatching functions executes the logic inside the functions and then dispatches other actions.

// Operations can be a place for encapsulating impure code.
// It can also be a place for coordinating multiple state updates.
// The thunk function receives the store methods dispatch() and getState() as parameters.
// Let’s implement a thunk action that creates a toast and removes it after a few seconds.

// currying: the outer fn takes our custom arg and returns a fn that takes the event
const addToast = (message) => (dispatch) => {
  const id = uuidv4()
  const toast = {
    id,
    message
  }

  dispatch(actions.addToast(toast))

  return setTimeout(() => dispatch(actions.deleteToast(toast)), 10000)
}

function AddToast({ addToast }) {
  // const handleClick = () => addToast('A new toast message')
  const handleClick = R.partial(addToast, 'A new toast message')
  // const handleClick = thunkify(addToast)('A new toast message')
  // const handleClick = R.curry(addToast) // doesn't work

  return (
    <div>
      <button onClick={handleClick}>Add Toast</button>
    </div>
  )
}

export default connect(null, { addToast })(AddToast)
