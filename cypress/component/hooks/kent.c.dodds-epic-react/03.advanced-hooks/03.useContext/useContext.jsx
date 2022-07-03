// https://github.com/muratkeremozcan/epic-react/blob/main/03.advanced-react-hooks/src/exercise/03.js

import * as React from 'react'

const CountContext = React.createContext()

// (3) use a ThemeProvider to provide the context/props/values/state to the children
function CountProvider({ children }) {
  const [count, setCount] = React.useState(0)

  return (
    <CountContext.Provider value={[count, setCount]}>
      {children}
    </CountContext.Provider>
  )
}

function CountDisplay() {
  const [count] = React.useContext(CountContext)
  return <div data-cy="count">{`The current count is ${count}`}</div>
}

function Counter() {
  const [, setCount] = React.useContext(CountContext)
  const increment = () => setCount((c) => c + 1)
  return (
    <button data-cy="increment" onClick={increment}>
      Increment count
    </button>
  )
}

function App() {
  return (
    <div>
      <CountProvider>
        <CountDisplay />
        <Counter />
      </CountProvider>
    </div>
  )
}

export default App
