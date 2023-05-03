import { useState, createContext, useContext } from 'react'
import type { Dispatch, SetStateAction } from 'react'

// 1. useState local state
const Component = () => {
  const [state, setState] = useState(0)
  return (
    <div>
      {state}
      <button onClick={() => setState(state + 1)}>+1</button>
    </div>
  )
}

// 2. Lift local state up and share it via context
const StateContext = createContext<[number, Dispatch<SetStateAction<number>>] | null>(null)

const Parent = ({ children }) => {
  return <StateContext.Provider value={useState(0)}>{children}</StateContext.Provider>
}

const ComponentWithStateContext = () => {
  // @ts-ignore
  const [state, setState] = useContext(StateContext)
  return (
    <div>
      {state}
      <button onClick={() => setState(state + 1)}>+1</button>
    </div>
  )
}

// 3. Have multiple states and contexts
const State1Context = createContext<[number, Dispatch<SetStateAction<number>>] | null>(null)
const State2Context = createContext<[number, Dispatch<SetStateAction<number>>] | null>(null)

const ParentWithMultipleContexts = ({ children }) => (
  <State1Context.Provider value={useState(0)}>
    <State2Context.Provider value={useState(0)}>{children}</State2Context.Provider>
  </State1Context.Provider>
)

const Component1 = () => {
  const [state, setState] = useContext(State1Context)
  return (
    <div>
      {state}
      <button onClick={() => setState(state + 1)}>+1</button>
    </div>
  )
}

const Component2 = () => {
  const [state, setState] = useContext(State2Context)

  return (
    <div>
      {state}
      <button onClick={() => setState(state + 1)}>+1</button>
    </div>
  )
}

const App = () => {
  return (
    <div>
      <h2>useState local state</h2>
      <Component />
      <h2>lift local state up and share it via context</h2>
      <Parent>
        <ComponentWithStateContext />
      </Parent>
      <h2>Have multiple states and contexts</h2>
      <ParentWithMultipleContexts>
        <Component1 />
        <Component2 />
      </ParentWithMultipleContexts>
    </div>
  )
}

it('useContext', () => {
  cy.mount(<App />)
})
