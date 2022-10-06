import { createStore } from 'redux'

const initialState = 1

function reducer(number = initialState, action) {
  switch (action.type) {
    case 'DOUBLE_VALUE':
      return number * 2
    default:
      return number
  }
}

const store = createStore(reducer, initialState)

store.subscribe(() => {
  store.getState() //?
})

store.dispatch({ type: 'DOUBLE_VALUE' })
store.getState() //?

store.dispatch({ type: 'DOUBLE_VALUE' })
store.getState() //?
