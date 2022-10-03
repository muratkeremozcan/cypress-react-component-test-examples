import { handleActions } from 'redux-actions'
import * as actions from './actions'

const initialState = Object.freeze({
  amount: 10000,
  term: 5,
  interest: 5
})

// takes state and action as arguments
// action is an object with a type and payload
// the payload is the form data
// returns { amount, term, interest }
function submitLoanRequest(_state, action) {
  const loanRequest = action.payload

  console.log('state :', _state)
  console.log('action :', action)

  return Object.freeze({
    ...loanRequest
  })
}

export default handleActions(
  {
    [actions.submitLoanRequest]: submitLoanRequest
  },
  initialState
)
