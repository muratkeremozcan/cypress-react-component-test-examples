import { createSlice } from '@reduxjs/toolkit'

interface todosState {
  data: { text: string; id: number }[]
}

const initialState: todosState = {
  data: []
}

export const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo(state, action) {
      const text: string = action.payload
      let id = Math.random()

      return {
        ...state,
        data: [{ text, id }, ...state.data]
      }
    },
    removeTodo(state, action) {
      const id: number = action.payload

      return {
        ...state,
        data: state.data.filter((todo) => todo.id !== id)
      }
    }
  }
})

export const { addTodo, removeTodo } = todosSlice.actions

export default todosSlice.reducer
