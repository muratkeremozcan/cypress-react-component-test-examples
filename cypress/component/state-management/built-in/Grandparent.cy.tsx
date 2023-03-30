import Grandparent from './Grandparent'

it('should', () => {
  cy.mount(<Grandparent />)

  cy.contains('Hello from Grandparent')
  cy.contains('Hello from Parent')
  cy.contains('Hello from Child')

  const newState = 'Hello from Child, updated!'
  cy.getByCy('update-state').click()

  cy.getByCy('Grandparent').contains(newState)
  cy.getByCy('Parent').contains(newState)
  cy.getByCy('Child').contains(newState)
})
