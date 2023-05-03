import { atom, useAtom, Provider } from 'jotai'
import { atomWithStorage } from 'jotai/utils'
import 'cypress-map'

// like atomWithToggle but also persist the state anytime it changes in given storage using atomWithStorage
function atomWithToggleAndStorage(key: string, initialValue?: boolean, storage?: any) {
  const anAtom = atomWithStorage(key, initialValue, storage)
  const derivedAtom = atom(
    (get) => get(anAtom),
    (get, set, nextValue?: boolean) => {
      const update = nextValue ?? !get(anAtom)
      set(anAtom, update)
    }
  )

  return derivedAtom
}

const isActiveAtom = atomWithToggleAndStorage('isActive')

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
        <h2>Toggle Example with Storage</h2>
        <Toggle />
      </div>
    </Provider>
  )
}

const getLocalStorageItem = (key: string) =>
  cy.window().its('localStorage').invoke('getItem', key).apply(JSON.parse)

it('atomWithToggleAndStorage', () => {
  cy.mount(<App />)

  cy.contains('force false').click()
  cy.contains('isActive: no')
  getLocalStorageItem('isActive').should('eq', false)

  cy.contains('force true').click()
  cy.contains('isActive: yes')
  getLocalStorageItem('isActive').should('eq', true)

  cy.contains('isActive: yes').click()
  getLocalStorageItem('isActive').should('eq', false)
  cy.contains('isActive: no').click()
  getLocalStorageItem('isActive').should('eq', true)
  cy.contains('isActive: yes')
})
