import PreviousComponent from './PreviousComponent'

it('usePrevious', () => {
  cy.mount(<PreviousComponent />)

  cy.contains('button', 'Increment').click()
  cy.contains('Change Name').click()
  cy.contains('div', '1 - 0')
})
