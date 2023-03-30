import Parent from './Parent'

it('should', () => {
  cy.mount(<Parent onParentStateChange={cy.stub().as('onParentStateChange')} />)

  cy.contains('Hello from Parent')
  cy.getByCy('Child').contains('p', 'Hello from Child')

  const newState = 'Hello from Child, updated!'
  cy.getByCy('update-state').click()

  cy.get('@onParentStateChange').should('have.been.calledWith', newState)
  cy.getByCy('Parent').contains(newState)
  cy.getByCy('Child').contains(newState)
})
