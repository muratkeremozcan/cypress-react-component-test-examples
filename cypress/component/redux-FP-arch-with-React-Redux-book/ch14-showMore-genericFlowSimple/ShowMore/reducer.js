import { handleActions } from 'redux-actions'
import * as actions from './actions'

const initialState = false

const toggleShowMore = (showMore) => !showMore

const reducer = handleActions(
  {
    [actions.toggleShowMore]: toggleShowMore
  },
  initialState
)

export default reducer
