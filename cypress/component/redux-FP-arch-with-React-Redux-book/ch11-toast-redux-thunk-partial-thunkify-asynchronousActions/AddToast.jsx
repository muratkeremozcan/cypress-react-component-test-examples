import React from 'react'
import { connect } from 'react-redux'
import { partial, curry } from 'lodash'
import * as R from 'ramda'
import thunkify from 'thunkify'
import * as actions from './toasts/actions'
import { v4 as uuidv4 } from 'uuid'

// [redux11] Asynchronous Actions
//  event -> ACTION -(async-communication-with-back-end)-(dispatch)-(middleware)-> REDUCER
// asynchronous action creators return a function that accepts a dispatch argument
// they do some async work with the back-end, and then call dispatch with a sync action creators
// For each action that requires a network request (meaning you’re dealing with an async action),
// you’ll need at least one synchronous action creator to indicate where you are in the request/response lifecycle.
// async actions need return a function instead of an object.
// Within that function, you can make your API call
// and dispatch a sync action when a response is available.

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
