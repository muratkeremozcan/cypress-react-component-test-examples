import { handleActions } from 'redux-actions'
import * as actions from './actions'

const initialState = Object.freeze({
  list: [],
  searchTerm: ''
})

const setList = (state, action) => ({
  ...state,
  list: action.payload
})

const changeSearch = (state, action) => ({
  ...state,
  searchTerm: action.payload
})

export default handleActions(
  {
    [actions.setList]: setList,
    [actions.changeSearch]: changeSearch
  },
  initialState
)
