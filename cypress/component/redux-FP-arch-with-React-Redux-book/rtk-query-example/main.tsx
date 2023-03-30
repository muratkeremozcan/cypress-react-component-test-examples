import React from 'react'
import ReactDOM from 'react-dom/client'
import {Provider} from 'react-redux'
import {store} from './redux/store'
import App from './App'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)

/* istanbul ignore file */
