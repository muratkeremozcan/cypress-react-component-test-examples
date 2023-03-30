import Grandparent from './Grandparent'
import { Provider } from 'react-redux'
import { store } from './store'

it('should', () => {
  cy.mount(
    <Provider store={store}>
      <Grandparent />
    </Provider>
  )

  cy.contains('Hello from Grandparent')
  cy.contains('Hello from Parent')
  cy.contains('Hello from Child')

  const newState = 'Hello from Child, updated!'
  cy.getByCy('update-state').click()

  cy.getByCy('Grandparent').contains(newState)
  cy.getByCy('Parent').contains(newState)
  cy.getByCy('Child').contains(newState)
})
