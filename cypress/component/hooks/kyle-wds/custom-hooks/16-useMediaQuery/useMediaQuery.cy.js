import MediaQueryComponent from './MediaQueryComponent'

it('useMediaQuery', () => {
  cy.viewport(200, 400)
  cy.mount(<MediaQueryComponent />)
  cy.contains('Large: true')

  cy.viewport(199, 400)
  cy.mount(<MediaQueryComponent />)
  cy.contains('Large: false')
})
