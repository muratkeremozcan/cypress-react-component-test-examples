import { atom, useAtomValue, useSetAtom, Provider, createStore, getDefaultStore } from 'jotai'

// a primitive atom that holds a number value, representing the current count.
const countAtom = atom(0)

// a component that uses useSetAtom to update the countAtom
// and useAtomValue to read the current count value
const Counter = () => {
  const count = useAtomValue(countAtom)
  const setCount = useSetAtom(countAtom)

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  )
}

function App() {
  return (
    <div>
      <h1>Counter Example</h1>
      <Counter />
    </div>
  )
}

// create a custom store
const customStore = createStore()
// set an initial value for countAtom in the custom store
customStore.set(countAtom, 5)

// get the default store
const defaultStore = getDefaultStore()

it('createStore getDefaultStore example', () => {
  cy.window()
    .its('console')
    .then((console) => cy.spy(console, 'log').as('log'))

  cy.mount(
    <Provider store={customStore}>
      <App />
    </Provider>
  )

  cy.wrap(defaultStore.get(countAtom)).should('eq', 0)
  cy.wrap(customStore.get(countAtom)).should('eq', 5)
  cy.contains('Count: 5')

  cy.contains('button', 'Increment').click()
  cy.wrap(defaultStore.get(countAtom)).should('eq', 0)
  cy.wrap(customStore.get(countAtom)).should('eq', 5)
  cy.contains('Count: 6')
})
