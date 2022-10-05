import { handleActions } from 'redux-actions'
import * as actions from './actions'

// generic flow:
// action: the work being done (reducer)
// reducer: how state should change (operation)
// selector: get data out of the store (operation)
// operation: utils for interactions with the back-end, used as a prop (component)
// mapStateToProps: get state from store and use it as a prop (component)
// connect(mapStateToProps, {operation}): link up with state (component)

const initialState = Object.freeze({
  storiesIds: [],
  topStories: []
})

//updaters
function setStoriesIds(state, action) {
  const storiesIds = action.payload
  // console.log(action) // {type: 'SET_STORIES_IDS', payload: Array(500)}
  return {
    ...state,
    storiesIds
  }
}

function addTopStories(state, action) {
  // console.log(action) // {type: 'SET_STORIES_IDS', payload: Array(500)}
  // console.log(state) // {storiesIds: Array(500), topStories: Array(0)}
  const newStories = action.payload
  const topStories = state.topStories.concat(newStories)
  // console.log(topStories) // Array(5), Array(10), Array(15)
  return {
    ...state,
    topStories
  }
}

export default handleActions(
  {
    [actions.setStoriesIds]: setStoriesIds,
    [actions.addTopStories]: addTopStories
  },
  initialState
)
