import TopStories from './TopStories'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import reducer from './reducer'
import { fetchTopStories } from './operations'

const store = createStore(reducer, applyMiddleware(thunk))
store.dispatch(fetchTopStories())

export default function App() {
  return (
    <Provider store={store}>
      <TopStories />
    </Provider>
  )
}
