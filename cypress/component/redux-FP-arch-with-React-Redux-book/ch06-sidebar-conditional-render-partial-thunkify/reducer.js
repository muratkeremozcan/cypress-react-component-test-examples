import { handleActions } from 'redux-actions'
import * as actions from './actions'

// setup your reducer

const initialState = false

const toggleSidebar = (show) => !show

export default handleActions(
  {
    [actions.toggleSidebar]: toggleSidebar
  },
  initialState
)
