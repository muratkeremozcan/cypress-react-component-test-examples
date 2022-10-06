import React from 'react'
import OtherView from './OtherView'
import Sidebar from './Sidebar'
import reducer from './reducer'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import './App.css'

export const store = createStore(reducer)

export default function App() {
  return (
    <Provider store={store}>
      <OtherView />
      <Sidebar>This is the content.</Sidebar>
    </Provider>
  )
}
