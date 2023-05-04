import { ReactNode } from 'react'
import { useHydrateAtoms } from 'jotai/utils'
import { atom, useAtom, Provider } from 'jotai'

const countAtom = atom(0)

function Counter() {
  const [count, setCount] = useAtom(countAtom)
  return (
    <h1>
      <p>{count}</p>
      <button onClick={() => setCount((c) => (c < 100 ? c + 1 : c))}>one up</button>
      <button onClick={() => setCount((c) => c - 1)}>one down</button>
    </h1>
  )
}

// You may want to inject arbitrary values to your atom before starting some tests.
// Maybe the counter should be start at 100

type HydrateAtomsProps = {
  initialValues: [typeof countAtom, number][]
  children: ReactNode
}

const HydrateAtoms = ({ initialValues, children }: HydrateAtomsProps) => {
  useHydrateAtoms(initialValues)
  return <>{children}</>
}

const TestProvider = ({ initialValues, children }: HydrateAtomsProps) => (
  <Provider>
    <HydrateAtoms initialValues={initialValues}>{children}</HydrateAtoms>
  </Provider>
)

it('should not increment on max (100)', () => {
  cy.mount(
    <TestProvider initialValues={[[countAtom, 100]]}>
      <Counter />
    </TestProvider>
  )

  cy.contains('100')
  cy.contains('button', 'one up').click()
  cy.contains('100')

  cy.contains('button', 'one down').click()
  cy.contains('99')
})
