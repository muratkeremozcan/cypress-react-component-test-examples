import { createStore } from 'redux'
import * as actions from './actions'
import reducer from './reducer'
import { Provider } from 'react-redux'
import ColorSearch from './ColorSearch'
import ColorList from './ColorList'
import colors from './colors.json'

// When the application starts, all the colors from the JSON file are read
// and then dispatched to the store using the setList action
const store = createStore(reducer)
store.dispatch(actions.setList(colors))

export default function App() {
  return (
    <Provider store={store}>
      <ColorSearch />
      <ColorList />
    </Provider>
  )
}
