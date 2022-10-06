import * as actions from './actions'
import { fetchCityWeather } from './api'

// [redux11] asynchronous action creators return a function that accepts a dispatch argument
// they do some async work with the back-end, and then call dispatch with a sync action creators
// For each action that requires a network request (meaning you’re dealing with an async action),
// you’ll need at least one synchronous action creator to indicate where you are in the request/response lifecycle.

// async actions need return a function instead of an object.
// Within that function, you can make your API call
// and dispatch a sync action when a response is available.
function fetchCity(cityName) {
  return function (dispatch) {
    fetchCityWeather(cityName).then(selectTemperature).then(actions.addCity).then(dispatch)
  }
}

function selectTemperature(response) {
  const { id, name } = response.data
  const { temp } = response.data.main
  return {
    id,
    name,
    temp
  }
}

export { fetchCity }
