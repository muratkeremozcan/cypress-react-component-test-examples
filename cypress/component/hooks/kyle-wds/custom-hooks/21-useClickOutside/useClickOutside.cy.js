import ClickOutsideComponent from './ClickOutsideComponent'

it('useClickOutside', () => {
  cy.mount(<ClickOutsideComponent />)

  cy.get('button').click()
  cy.contains('span', 'Modal').click().should('be.visible')
  cy.get('body').click()
  cy.contains('span', 'Modal').should('not.be.visible')
})
