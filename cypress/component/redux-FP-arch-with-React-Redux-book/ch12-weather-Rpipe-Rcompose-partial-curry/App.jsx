import React from 'react'
import CitySearch from './CitySearch'
import CityList from './CityList'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import reducer from './reducer'

export const store = createStore(reducer, compose(applyMiddleware(thunk)))

function App() {
  return (
    <>
      <CitySearch />
      <CityList />
    </>
  )
}

export default App
