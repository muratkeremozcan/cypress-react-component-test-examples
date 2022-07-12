import ArrayComponent from './ArrayComponent'

it('useArray', () => {
  cy.mount(<ArrayComponent />)

  cy.getByCy('array').should('have.text', '1, 2, 3, 4, 5, 6')

  cy.contains('Add 7').click()
  cy.getByCy('array').should('have.text', '1, 2, 3, 4, 5, 6, 7')

  cy.contains('Change Second Element To 9').click()
  cy.getByCy('array').should('have.text', '1, 9, 3, 4, 5, 6, 7')

  cy.contains('Remove Second Element').click()
  cy.getByCy('array').should('have.text', '1, 3, 4, 5, 6, 7')

  cy.contains('Keep Numbers Less Than 4').click()
  cy.getByCy('array').should('have.text', '1, 3')

  cy.contains('Set index 1 to 2').click()
  cy.getByCy('array').should('have.text', '1, 2')

  cy.contains('Clear').click()
  cy.getByCy('array').should('have.text', '')
})
