import { useAtom } from 'jotai'
import { loadable, atomWithObservable } from 'jotai/utils'
import { interval } from 'rxjs'
import { map } from 'rxjs/operators'

// Create an observable that emits a new value every second
const counterObservable = interval(1000).pipe(map((i) => `#${i}`))

// Create an atom with the observable
const counterAtom = atomWithObservable(() => counterObservable)

// Create a loadable atom to handle loading, data, and error states
const loadableCounterAtom = loadable(counterAtom)

const Counter = () => {
  const [counter] = useAtom(loadableCounterAtom)

  // Handle different states of the loadable atom
  if (counter.state === 'loading') {
    return <div>Loading...</div>
  } else if (counter.state === 'hasError') {
    if (counter.error instanceof Error) {
      return <div>Error: {counter.error.message}</div>
    } else {
      return <div>Unknown Error</div>
    }
  }

  return <div>Count: {counter.data}</div>
}

function App() {
  return (
    <div>
      <h1>Counter with Observable</h1>
      <Counter />
    </div>
  )
}

it('should', () => {
  cy.clock()
  cy.mount(<App />)
  cy.contains('Loading...')

  cy.tick(1000)
  cy.contains('Count: #0')

  cy.tick(1000)
  cy.contains('Count: #1')

  cy.tick(100000)
  cy.contains('Count: #10')
})
