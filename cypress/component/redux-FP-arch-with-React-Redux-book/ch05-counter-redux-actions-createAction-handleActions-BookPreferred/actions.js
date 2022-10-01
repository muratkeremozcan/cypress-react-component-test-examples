import { createAction } from 'redux-actions'

// redux-actions simplifies action creation

export const increment = createAction('increment')
export const decrement = createAction('decrement')

// question: what if the action takes an object?
