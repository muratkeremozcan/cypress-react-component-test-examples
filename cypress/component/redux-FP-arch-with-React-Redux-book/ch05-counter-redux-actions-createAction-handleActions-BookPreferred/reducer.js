import { handleActions } from 'redux-actions'
import * as actions from './actions'

const initialState = 0

const increment = (counter) => counter + 1
const decrement = (counter) => counter - 1

// [redux5.2] redux-actions simplifies action creation
// we can replace the switch with a Map
// handleActions() is a utility function from redux-actions
// that can map actions to smaller update functions

export default handleActions(
  {
    [actions.increment]: increment,
    [actions.decrement]: decrement
  },
  initialState
)

// export const INCREMENT = 'INCREMENT'
// export const DECREMENT = 'DECREMENT'

// export default function reducer(counter = initialState, action) {
//   switch (action.type) {
//     case INCREMENT:
//       return counter + 1
//     case DECREMENT:
//       return counter - 1
//     default:
//       return counter
//   }
// }
