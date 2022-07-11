import DebounceComponent from './DebounceComponent'

it('debounceComponent', () => {
  cy.on('window:alert', cy.stub().as('alerted'))
  cy.mount(<DebounceComponent />)

  cy.getByCy('count').contains(10)
  cy.getByCy('increment').click().click().click()
  cy.get('@alerted').should('have.been.calledOnce')
})
