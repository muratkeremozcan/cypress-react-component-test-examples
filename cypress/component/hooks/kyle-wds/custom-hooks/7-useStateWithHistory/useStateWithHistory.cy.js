import StateWithHistoryComponent from './StateWithHistoryComponent'

it('useStateWithHistory', () => {
  cy.mount(<StateWithHistoryComponent />)

  cy.contains('Double').click().click().click()
  cy.getByCy('history').contains('1, 2, 4, 8')
  cy.getByCy('count').contains('8')
  cy.getByCy('pointer').contains('3')

  cy.contains('Back').click().click()
  cy.getByCy('history').contains('1, 2, 4, 8')
  cy.getByCy('count').contains('2')
  cy.getByCy('pointer').contains('1')

  cy.contains('Go To Index 2').click()
  cy.getByCy('history').contains('1, 2, 4, 8')
  cy.getByCy('count').contains('4')
  cy.getByCy('pointer').contains('2')

  cy.contains('Change Name').click()
  cy.contains('John')

  cy.contains('Forward').click()
  cy.getByCy('history').contains('1, 2, 4, 8')
  cy.getByCy('count').contains('8')
  cy.getByCy('pointer').contains('3')

  cy.contains('Increment').click()
  cy.getByCy('history').contains('1, 2, 4, 8, 9')
  cy.getByCy('count').contains('9')
  cy.getByCy('pointer').contains('4')
})
