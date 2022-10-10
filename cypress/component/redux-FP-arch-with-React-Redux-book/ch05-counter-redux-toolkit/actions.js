// import { createAction } from 'redux-actions'
import { createAction } from '@reduxjs/toolkit'

// event -> ACTION -(dispatch)-(middleware)-> REDUCER -> STORE(state) -(selector)-> update VIEW
// [redux5.0] In Redux, actions are payloads of information that send data from your application to your store.
// actions return an object with a required type key
// actions represent all the basic ways a user can interact with the app
// we also need to use the dispatch fn (from Redux) to dispatch the action
// Users and servers are the two actors that can modify state in your applications

// redux-actions simplifies action creation
export const increment = createAction('increment')
export const decrement = createAction('decrement')
