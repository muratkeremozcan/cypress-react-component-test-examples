// import { createStore } from 'redux'
import { configureStore } from '@reduxjs/toolkit'
import reducer from './reducer'

// const store = createStore(reducer)
const store = configureStore({ reducer })

export { store }
