import { createStore } from 'redux'

// use Quokka

const initialState = {
  title: 'beautiful code',
  author: 'Douglas Rockford'
}

// reducer function : transforms state, takes current state and action
// the update/reducer functions are pure functions, they do not change the state directly.
function updateBook(state = initialState, action) {
  switch (action.type) {
    case 'CHANGE_BOOK_TITLE':
      return {
        ...state,
        title: action.title
      }
    default:
      return state
  }
}

// create the store: takes the reducer and initial state`
const store = createStore(updateBook, initialState)

// [redux ch1] The store has just a few methods:
// * getState() returns the current state tree of the application.
// * dispatch(action) can change state by dispatching actions.
// * subscribe(listener) allows listening for changes.

// still initial state
store.getState() //?

// subscribes &shows to all future changes of state
store.subscribe(() => {
  store.getState() //?
})

// change the state with dispatch, dispatch takes an Action
store.dispatch({
  type: 'CHANGE_BOOK_TITLE',
  title: 'JS The Best Parts'
})
store.getState() //?

store.dispatch({ type: 'CHANGE_BOOK_TITLE', title: 'How JavaScript Works' })
store.getState() //?
