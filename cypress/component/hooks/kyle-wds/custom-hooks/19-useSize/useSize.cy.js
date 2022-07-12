import SizeComponent from './SizeComponent'

it('useSize', () => {
  cy.mount(<SizeComponent />)
  cy.contains('width":176.6')

  cy.get('textarea').type('................................................')
  cy.contains('width":160')

  cy.get('textarea').clear()
  cy.contains('width":176.6')
})
