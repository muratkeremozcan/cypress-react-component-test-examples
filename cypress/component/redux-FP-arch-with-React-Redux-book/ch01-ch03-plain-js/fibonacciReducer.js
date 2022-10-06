import { createStore } from 'redux'

const initialState = Object.freeze({
  prevNumber: 0,
  currentNumber: 1
})

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'NEXT_FIBONACCI_NUMBER':
      return {
        prevNumber: state.currentNumber,
        currentNumber: state.prevNumber + state.currentNumber
      }
    default:
      return state
  }
}

const store = createStore(reducer)

store.subscribe(() => {
  store.getState() //?
})

store.dispatch({ type: 'NEXT_FIBONACCI_NUMBER' })
store.getState() //?

store.dispatch({ type: 'NEXT_FIBONACCI_NUMBER' })
store.dispatch({ type: 'NEXT_FIBONACCI_NUMBER' })
store.dispatch({ type: 'NEXT_FIBONACCI_NUMBER' })
store.dispatch({ type: 'NEXT_FIBONACCI_NUMBER' })
store.dispatch({ type: 'NEXT_FIBONACCI_NUMBER' })
store.getState() //?
