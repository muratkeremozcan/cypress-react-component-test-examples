import TimeoutComponent from './TimeoutComponent'

it('useTimeout', () => {
  cy.mount(<TimeoutComponent />)

  cy.getByCy('clear-timeout').click()
  cy.getByCy('count').contains('10')

  cy.getByCy('reset-timeout').click()
  cy.getByCy('count').contains('0')

  cy.getByCy('increment').click()
  cy.getByCy('count').contains('1')
})
