import ShowMore from './ShowMore/ShowMore'
// import { createStore } from 'redux'
// import { Provider } from 'react-redux'
// import rootReducer from './rootReducer'
// const store = createStore(rootReducer)

// we can set up the store in the app or in the component test... or both

export default function App() {
  return (
    <div>
      {/* <Provider store={store}> */}
      <ShowMore title="Title1">This is my content1</ShowMore>
      <ShowMore title="Title2">This is my content2</ShowMore>
      <ShowMore title="Title3">This is my content3</ShowMore>
      {/* </Provider> */}
    </div>
  )
}
