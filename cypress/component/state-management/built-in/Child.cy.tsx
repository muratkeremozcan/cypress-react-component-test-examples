import Child from './Child'

it('should', () => {
  cy.mount(<Child onChildStateChange={cy.stub().as('onChildStateChange')} />)
  cy.contains('Hello from Child!')

  const newState = 'Hello from Child, updated!'
  cy.getByCy('update-state').click()

  cy.get('@onChildStateChange').should('have.been.calledWith', newState)
  cy.getByCy('Child').contains(newState)
})
