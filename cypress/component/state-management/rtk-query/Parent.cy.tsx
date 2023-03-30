import Parent from './Parent'
import { Provider } from 'react-redux'
import { store } from './store'

it('should', () => {
  cy.mount(
    <Provider store={store}>
      <Parent />
    </Provider>
  )

  cy.contains('Hello from Parent')
  cy.getByCy('Child').contains('p', 'Hello from Child')

  const newState = 'Hello from Child, updated!'
  cy.getByCy('update-state').click()

  cy.getByCy('Parent').contains(newState)
  cy.getByCy('Child').contains(newState)
})
