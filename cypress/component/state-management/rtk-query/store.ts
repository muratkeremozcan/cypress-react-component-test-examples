import { createSlice, configureStore } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// const api = createApi({
//   reducerPath: 'api',
//   baseQuery: fetchBaseQuery({ baseUrl: 'https://api.example.com' }),
//   endpoints: (builder) => ({
//     getData: builder.query<any, void>({
//       query: () => '/data'
//     })
//   })
// })

// export const { useGetDataQuery } = api

export type AppState = {
  data: {
    grandparentState: string
    parentState: string
    childState: string
  }
}

const initialState = {
  grandparentState: 'Hello from Grandparent!',
  parentState: 'Hello from Parent!',
  childState: 'Hello from Child!'
}

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    setGrandparentState: (state: AppState['data'], action: PayloadAction<string>) => {
      state.grandparentState = action.payload
    },
    setParentState: (state: AppState['data'], action: PayloadAction<string>) => {
      state.parentState = action.payload
    },
    setChildState: (state: AppState['data'], action: PayloadAction<string>) => {
      state.childState = action.payload
    }
  }
})

export const { setGrandparentState, setParentState, setChildState } = dataSlice.actions

export const store = configureStore({
  reducer: {
    data: dataSlice.reducer
    // [api.reducerPath]: api.reducer
  }
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware)
})
