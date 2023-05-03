import { atom, useAtomValue, useSetAtom, Provider, createStore, useStore } from 'jotai'

const countAtom = atom(0)

const Counter = ({ title }) => {
  const count = useAtomValue(countAtom)
  const setCount = useSetAtom(countAtom)
  const store = useStore()

  const resetCount = () => store.set(countAtom, 0)

  return (
    <div>
      <h3>{title}</h3>
      <h2 data-cy={`${title}-count`}>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={resetCount}>Reset</button>
    </div>
  )
}

function App() {
  const store1 = createStore()
  store1.set(countAtom, 5)

  const store2 = createStore()
  store2.set(countAtom, 10)

  return (
    <div>
      <h1>Counter Example with Multiple Providers and useStore</h1>
      <Provider store={store1}>
        <Counter title="Counter 1" />
      </Provider>

      <Provider store={store2}>
        <Counter title="Counter 2" />
      </Provider>
    </div>
  )
}

it('Provider and useStore example', () => {
  cy.mount(<App />)
  cy.contains('Count: 5')
  cy.contains('Count: 10')

  cy.get('button:contains(Increment)').click({ multiple: true })
  cy.contains('Count: 6')
  cy.contains('Count: 11')

  cy.get('button:contains(Reset)').click({ multiple: true })
  cy.getByCy('Counter 1-count').contains('Count: 0')
  cy.getByCy('Counter 2-count').contains('Count: 0')
})
