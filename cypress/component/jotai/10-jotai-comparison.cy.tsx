import React from 'react'
import { Provider, atom, useAtom } from 'jotai'

// 1. useState local state (Jotai version)
const localStateAtom = atom(0)

const Component = () => {
  const [state, setState] = useAtom(localStateAtom)
  return (
    <div>
      {state}
      <button onClick={() => setState(state + 1)}>+1</button>
    </div>
  )
}

// 2. Lift local state up and share it via Jotai
const sharedStateAtom = atom(0)

const ComponentWithSharedState = () => {
  const [state, setState] = useAtom(sharedStateAtom)
  return (
    <div>
      {state}
      <button onClick={() => setState(state + 1)}>+1</button>
    </div>
  )
}

// 3. Have multiple states and atoms
const state1Atom = atom(0)
const state2Atom = atom(0)

const Component1 = () => {
  const [state, setState] = useAtom(state1Atom)
  return (
    <div>
      {state} <button onClick={() => setState(state + 1)}>Increment</button>
    </div>
  )
}

const Component2 = () => {
  const [state, setState] = useAtom(state2Atom)
  return (
    <div>
      {state} <button onClick={() => setState(state + 1)}>Increment</button>
    </div>
  )
}

const App = () => {
  return (
    <Provider>
      <div>
        <h2>useState local state (Jotai version)</h2>
        <Component />
        <h2>Lift local state up and share it via Jotai</h2>
        <ComponentWithSharedState />
        <h2>Have multiple states and atoms</h2>
        <Component1 />
        <Component2 />
      </div>
    </Provider>
  )
}

it('jotai', () => {
  cy.mount(<App />)
})
