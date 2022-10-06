import * as api from './api'
import * as actions from './actions'
import { getTopStoriesNumber } from './selectors'
import { tap } from 'ramda'

// Reducer

const maxNoOfNewStories = 5

function fetchDetailsForStories(ids) {
  const promises = ids.map(api.fetchStory)
  return Promise.all(promises)
}

// The store has just a few methods:
// * getState() returns the current state tree of the application.
// * dispatch(action) can change state by dispatching actions.
// * subscribe(listener) allows listening for changes.

// async action creator
//  currying: the outer fn takes our custom arg (if any) and returns a fn that takes the event
// the event is (dispatch, getState)
export const showMoreStories = () => async (dispatch, getState) => {
  const { storiesIds } = await getState()
  // console.log(getState()) // {storiesIds: Array(500), topStories: Array(0)}

  const from = getTopStoriesNumber(getState()) // 0, 5, 10 ...
  const to = from + maxNoOfNewStories
  const newIds = storiesIds.slice(from, to)

  fetchDetailsForStories(newIds).then(actions.addTopStories).then(dispatch)
}

export function fetchTopStories() {
  return function (dispatch) {
    api
      .fetchTopStoriesIds()
      .then(actions.setStoriesIds)
      .then(dispatch) // dispatch the action {type: 'SET_STORIES_IDS', payload: Array(500)}
      .then(tap(console.log)) // you can use R.tap to debug
      .then(showMoreStories) // so that there are stories to begin with
      .then(dispatch)
  }
}
