import { handleActions } from 'redux-actions'
import * as actions from './actions'

const initialState = Object.freeze({
  list: [],
  searchTermInput: '',
  searchTerm: ''
})

//updaters
function setList(state, action) {
  return {
    ...state,
    list: action.payload
  }
}

function changeSearch(state, action) {
  return Object.freeze({
    ...state,
    searchTermInput: action.payload
  })
}

function submitSearch(state, action) {
  return Object.freeze({
    ...state,
    searchTerm: action.payload
  })
}

export default handleActions(
  {
    [actions.setList]: setList,
    [actions.changeSearch]: changeSearch,
    [actions.submitSearch]: submitSearch
  },
  initialState
)
