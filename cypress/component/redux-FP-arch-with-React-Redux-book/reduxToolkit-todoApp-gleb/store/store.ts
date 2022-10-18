import { configureStore } from '@reduxjs/toolkit'
import todosReducer from './reducers/todosSlice'

export const store = configureStore({
  reducer: {
    todos: todosReducer,
  },
})

// @ts-ignore
if (window.Cypress) {
  // @ts-ignore
  window.store = store
}

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
