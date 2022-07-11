import ToggleComponent from './ToggleComponent'

it('useToggle', () => {
  cy.mount(<ToggleComponent />)

  cy.getByCy('value').contains('false')
  cy.getByCy('toggle').click()
  cy.getByCy('value').contains('true')

  cy.getByCy('make-false').click()
  cy.getByCy('value').contains('false')
  cy.getByCy('make-true').click()
  cy.getByCy('value').contains('true')
})
