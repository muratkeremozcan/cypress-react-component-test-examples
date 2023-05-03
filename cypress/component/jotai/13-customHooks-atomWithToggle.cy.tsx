import { atom, useAtom, Provider } from 'jotai'

// atomWithToggle creates a new atom with a boolean as initial state & a setter function to toggle it.
function atomWithToggle(initialValue?: boolean) {
  const anAtom = atom(initialValue, (get, set, nextValue?: boolean) => {
    const update = nextValue ?? !get(anAtom)
    set(anAtom, update)
  })

  return anAtom
}

const isActiveAtom = atomWithToggle(true)

const Toggle = () => {
  const [isActive, toggle] = useAtom(isActiveAtom)

  return (
    <>
      <button onClick={() => toggle()}>isActive: {isActive ? 'yes' : 'no'}</button>
      <button onClick={() => toggle(true)}>force true</button>
      <button onClick={() => toggle(false)}>force false</button>
    </>
  )
}

const App = () => {
  return (
    <Provider>
      <div>
        <h2>Toggle Example</h2>
        <Toggle />
      </div>
    </Provider>
  )
}

it('atomWithToggle', () => {
  cy.mount(<App />)

  cy.contains('force false').click()
  cy.contains('isActive: no')

  cy.contains('force true').click()
  cy.contains('isActive: yes')

  cy.contains('isActive: yes').click()
  cy.contains('isActive: no').click()
  cy.contains('isActive: yes')
})
