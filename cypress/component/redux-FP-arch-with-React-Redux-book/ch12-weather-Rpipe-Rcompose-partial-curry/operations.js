import * as actions from './actions'
import { fetchCityWeather } from './api'

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
