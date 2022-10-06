import { createReducer } from '@reduxjs/toolkit'
import * as actions from './actions'

const initialState = 0

const increment = (counter) => counter + 1
const decrement = (counter) => counter - 1

// redux toolkit replaces redux actions

export default createReducer(initialState, {
  [actions.increment]: increment,
  [actions.decrement]: decrement
})
