import { createAction, handleActions } from 'redux-actions'
import { createStore } from 'redux'
import { partial, curry } from 'lodash'
import * as R from 'ramda'
// import thunkify from 'thunkify' // doesn't work

// [redux2] curry vs partial

// actions
const ActionAddToast = createAction('ADD_TOAST')
const ActionDeleteToast = createAction('DELETE_TOAST')

// reducer
const initialState = []

function addToast(toasts, action) {
  const newToast = action.payload
  return [...toasts, newToast]
}

function deleteToast(toasts, action) {
  const toastId = action.payload.id
  const newToasts = toasts.filter(({ id }) => id !== toastId)
  return newToasts
}

const reducer = handleActions(
  {
    [ActionAddToast]: addToast,
    [ActionDeleteToast]: deleteToast
  },
  initialState
)

const store = createStore(reducer)

store.dispatch(ActionAddToast({ id: 1, message: 'a new message' }))

store.getState() //?

//////// partial vs curry
// partial in simple terms: if you have a function with five parameters, and you supply three of the arguments,
// you end up with a function that expects the last two.

// curry, wrap the function and pass arguments later; it will work when there are enough arguments

const toast = (message) => (/*dispatch*/) => {
  const id = 5
  const t = {
    id,
    message
  }

  return store.dispatch(ActionAddToast(t))
}

// const handleClick = () => toast('a second message')()
// const handleClick = partial(toast, 'a second message'')()
// const handleClick = curry(toast)('a second message')
// const handleClick = curry(toast, 'a second message')()

// const handleClick = R.partial(toast, 'a second message')()
const handleClick = R.curry(toast)('a second message')
// const handleClick = R.curry(toast, 'a second message')() // doesn't work

// const handleClick = thunkify(toast)('a new message') // doesn't work

handleClick()

store.getState() //?
