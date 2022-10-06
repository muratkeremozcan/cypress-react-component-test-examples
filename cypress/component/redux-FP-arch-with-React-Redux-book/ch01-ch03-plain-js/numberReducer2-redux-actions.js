import { createStore } from 'redux'
import { createAction, handleActions } from 'redux-actions'

const initialState = 1

// [redux3] redux-actions simplifies actions

const double = (number) => number * 2
const actionDouble = createAction('DOUBLE_VALUE')

const reducer = handleActions(
  {
    [actionDouble]: double
  },
  initialState
)

// function reducer(number = initialState, action) {
//   switch (action.type) {
//     case 'DOUBLE_VALUE':
//       return number * 2
//     default:
//       return number
//   }
// }

const store = createStore(reducer, initialState)

store.subscribe(() => {
  store.getState() //?
})

store.dispatch({ type: 'DOUBLE_VALUE' })
store.getState() //?

store.dispatch({ type: 'DOUBLE_VALUE' })
store.getState() //?
