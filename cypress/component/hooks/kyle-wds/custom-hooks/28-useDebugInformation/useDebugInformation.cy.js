import DebugInformationComponent from './DebugInformationComponent'
it('useDebugInformation', () => {
  cy.mount(<DebugInformationComponent />)

  cy.contains('false')
  cy.contains('0')
  cy.contains('"count": 1,')

  // cy.contains('button', 'Increment').click()
  // cy.contains('false')
  // cy.contains('1')
  // cy.contains('"count": 2,')

  // cy.contains('button', 'Toggle').click()
  // cy.contains('true')
  // cy.contains('1')
  // cy.contains('"count": 3,')
})
