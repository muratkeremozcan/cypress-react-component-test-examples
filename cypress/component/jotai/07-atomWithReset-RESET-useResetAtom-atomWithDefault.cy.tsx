import { atom, useAtom } from 'jotai'
import { atomWithReset, useResetAtom, RESET, atomWithDefault } from 'jotai/utils'

// no reset for regular atoms
const baseCounterAtom = atom(1)

// atomWithDefault: creates a resettable primitive atom
// its default value can be specified with a read function instead of a static initial value.
const defaultCounterAtom = atomWithDefault((get) => get(baseCounterAtom) * 2)

// atomWithReset: creates a resettable primitive atom
// the default value is specified as a static initial value.
const resettableCounterAtom = atomWithReset(0)

const Counter = () => {
  const [baseCounter, setBaseCounter] = useAtom(baseCounterAtom)

  const [defaultCounter, setDefaultCounter] = useAtom(defaultCounterAtom)
  const resetDefaultCounter = useResetAtom(defaultCounterAtom)

  const [resettableCounter, setResettableCounter] = useAtom(resettableCounterAtom)
  const resetResettableCounter = useResetAtom(resettableCounterAtom)

  return (
    <>
      <div>
        <div>Base Counter (atom): {baseCounter}</div>
        <button onClick={() => setBaseCounter((c) => c + 1)}>Increment Base Counter</button>
      </div>
      <div>
        <div>Default Counter (atomWithDefault): {defaultCounter}</div>
        <button onClick={() => setDefaultCounter((c) => c + 1)}>Increment Default Counter</button>
        <button onClick={resetDefaultCounter}>Reset Default Counter (useResetAtom)</button>
        <button onClick={() => setDefaultCounter(RESET)}>Reset Default Counter (RESET)</button>
      </div>

      <div>
        <div>Resettable Counter (atomWithReset): {resettableCounter}</div>
        <button onClick={() => setResettableCounter((c) => c + 1)}>
          Increment Resettable Counter
        </button>
        <button onClick={resetResettableCounter}>Reset Resettable Counter (useResetAtom)</button>
        <button onClick={() => setResettableCounter(RESET)}>
          Reset Resettable Counter (RESET)
        </button>
      </div>
    </>
  )
}

function App() {
  return (
    <div>
      <h1>Jotai Resettable and Default Atoms Example</h1>
      <Counter />
    </div>
  )
}

it('atomWithReset, RESET, useResetAtom, atomWithDefault', () => {
  cy.mount(<App />)
  cy.contains('Base Counter (atom): 1')
  cy.contains('Default Counter (atomWithDefault): 2')

  cy.log('**base counter increments both base and default(x2) counters**')
  cy.contains('Increment Base Counter').click()
  cy.contains('Base Counter (atom): 2')
  cy.contains('Default Counter (atomWithDefault): 4')
  cy.contains('Resettable Counter (atomWithReset): 0')

  cy.log('**default counter increments just default counter by 1**')
  cy.contains('Increment Default Counter').click()
  cy.contains('Base Counter (atom): 2')
  cy.contains('Default Counter (atomWithDefault): 5')
  cy.contains('Resettable Counter (atomWithReset): 0')

  cy.log('**useResetAtom reset just resets default counter**')
  cy.contains('Reset Default Counter (useResetAtom)').click()
  cy.contains('Base Counter (atom): 2')
  cy.contains('Default Counter (atomWithDefault): 4')
  cy.contains('Resettable Counter (atomWithReset): 0')

  cy.log('**we can also RESET the atom instead of useResetAtom**')
  cy.contains('Increment Default Counter').click()
  cy.contains('Reset Default Counter (RESET)').click()
  cy.contains('Base Counter (atom): 2')
  cy.contains('Default Counter (atomWithDefault): 4')
  cy.contains('Resettable Counter (atomWithReset): 0')

  cy.log('**increment resettable counter**')
  cy.contains('Increment Resettable Counter').click()
  cy.contains('Base Counter (atom): 2')
  cy.contains('Default Counter (atomWithDefault): 4')
  cy.contains('Resettable Counter (atomWithReset): 1')

  cy.log('**reset resettable counter**')
  cy.contains('Reset Resettable Counter (useResetAtom)').click()
  cy.contains('Base Counter (atom): 2')
  cy.contains('Default Counter (atomWithDefault): 4')
  cy.contains('Resettable Counter (atomWithReset): 0')

  cy.log('**we can also RESET the atom instead of useResetAtom**')
  cy.contains('Increment Resettable Counter').click()
  cy.contains('Reset Resettable Counter (RESET)').click()
  cy.contains('Base Counter (atom): 2')
  cy.contains('Default Counter (atomWithDefault): 4')
  cy.contains('Resettable Counter (atomWithReset): 0')
})
