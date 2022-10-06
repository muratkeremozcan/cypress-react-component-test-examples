import React from 'react'
import { connect } from 'react-redux'
import { partial } from 'lodash'
import { changeCityName } from './actions'
import { fetchCity } from './operations'
import { pipe, curry, compose } from 'lodash/fp'
import * as R from 'ramda'

function CitySearch({ cityName, fetchCity /*, changeCityName */ }) {
  const getInputChange = (e) =>
    Object.freeze({
      name: e.target.name,
      value: e.target.value
    })

  // alternative: works with lodash
  //   const withChange = (cb) => {
  //     console.log(cb) // (...args) => dispatch(actionCreator(...args))
  //     return pipe(getInputChange, cb)
  //   }
  //   const withChange = (cb) => () => cb(getInputChange) // single line version
  //   const withChange = (cb) => compose(cb, getInputChange) // compose
  //   const withChange = (cb) => pipe(getInputChange, cb) // pipe
  //   const handleChange = withChange(changeCityName) // needs the prop changeCityName

  // [redux6]KEY: FP tricks compose, pipe
  // works with ramda (I like this better, because it doesn't need the prop changeCityName)
  //   const handleChange = (changeCityName) => () => changeCityName(getInputChange) // single line version
  //   const handleChange = (changeCityName) => R.compose(changeCityName, getInputChange) // compose
  const handleChange = (changeCityName) => R.pipe(getInputChange, changeCityName) // pipe

  // [redux6]FP tricks: partial, curry
  //   const handleClick = () => fetchCity(cityName)
  //   const handleClick = partial(fetchCity, cityName)
  //   const handleClick = curry(fetchCity, cityName)
  const handleClick = R.partial(fetchCity, cityName)
  //   const handleClick = R.curry(fetchCity, cityName)

  return (
    <div>
      <input type="text" value={cityName} onChange={handleChange} />

      <button type="button" onClick={handleClick}>
        Add City
      </button>
    </div>
  )
}

function mapStateToProps({ cityName }) {
  return {
    cityName
  }
}

export default connect(mapStateToProps, { changeCityName, fetchCity })(CitySearch)
