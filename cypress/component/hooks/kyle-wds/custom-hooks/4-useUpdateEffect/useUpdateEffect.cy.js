import UpdateEffectComponent from './UpdateEffectComponent'

it('useUpdateEffect', () => {
  cy.on('window:alert', cy.stub().as('alerted'))
  cy.mount(<UpdateEffectComponent />)

  cy.getByCy('count').contains(10)
  cy.get('@alerted').should('not.have.been.called')

  cy.getByCy('increment').click().click().click()
  cy.get('@alerted').its('callCount').should('eq', 3)
})
