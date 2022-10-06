import React from 'react'
import LoanForm from './LoanForm'
import LoanResult from './LoanResult'
// import reducer from './reducer'
// import { createStore } from 'redux'
// import { Provider } from 'react-redux'

// const store = createStore(reducer)

export default function App() {
  return (
    // <Provider store={store}>
    <div>
      <LoanForm />
      <LoanResult />
    </div>
    // </Provider>
  )
}
