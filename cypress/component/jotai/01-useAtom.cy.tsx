import { Provider, atom, useAtom } from 'jotai'

// a primitive atom that holds a simple integer value, representing the count.
const countAtom = atom(0)

// a read-only derived atom that calculates the double of the countAtom value.
const doubleCountAtom = atom((get) => get(countAtom) * 2)

// a read-write derived atom that calculates the triple of the countAtom value
// and allows updating the countAtom value based on the triple count.
const tripleCountAtom = atom(
  (get) => get(countAtom) * 3, // if the 1st arg was null, it would be write-only derived atom
  (get, set, newValue: number) => {
    // console.log(newValue) // what is read above, goes to newValue here
    set(countAtom, newValue / 3) // still ensure that he original count is updated, at 1/3 the rate
  }
)

function App() {
  const [count, setCount] = useAtom(countAtom)
  const [doubleCount] = useAtom(doubleCountAtom)
  // const doubleCount = useAtomValue(doubleCountAtom) // same thing
  const [tripleCount, setTripleCount] = useAtom(tripleCountAtom)
  console.log(tripleCount)

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
      <h2>Double Count: {doubleCount}</h2>
      <h2>Triple Count: {tripleCount}</h2>
      <button onClick={() => setTripleCount(tripleCount + 3)}>Increase Triple Count</button>
    </div>
  )
}

it('useAtom example', () => {
  cy.mount(
    <Provider>
      <App />
    </Provider>
  )

  cy.contains('button', 'Increment').click()
  cy.contains('Count: 1')
  cy.contains('Double Count: 2')
  cy.contains('Triple Count: 3')

  cy.contains('button', 'Increase Triple Count').click()
  cy.contains('Count: 2')
  cy.contains('Double Count: 4')
  cy.contains('Triple Count: 6')
})
