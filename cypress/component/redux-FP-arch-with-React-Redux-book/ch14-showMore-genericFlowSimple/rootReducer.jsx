import { combineReducers } from 'redux'
import showMoreReducer from './ShowMore/reducer'

export default combineReducers({
  showMore: showMoreReducer
})
