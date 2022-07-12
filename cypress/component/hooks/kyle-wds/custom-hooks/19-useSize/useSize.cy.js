import SizeComponent from './SizeComponent'

it('useSize', () => {
  cy.mount(<SizeComponent />)
  cy.contains('width":17')
})
