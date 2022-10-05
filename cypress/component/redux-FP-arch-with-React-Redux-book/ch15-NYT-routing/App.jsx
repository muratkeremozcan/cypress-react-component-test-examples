import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { BrowserRouter } from 'react-router-dom'
import rootReducer from './rootReducer'
import AppRouter from './AppRouter'

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

export default function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <AppRouter />
      </Provider>
    </BrowserRouter>
  )
}
