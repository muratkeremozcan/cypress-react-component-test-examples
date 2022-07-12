import StateWithValidationComponent from './StateWithValidationComponent'

it('useStateWithValidation', () => {
  cy.mount(<StateWithValidationComponent />)

  cy.contains('false')
  cy.get('input').type('123456')
  cy.contains('true')
})
