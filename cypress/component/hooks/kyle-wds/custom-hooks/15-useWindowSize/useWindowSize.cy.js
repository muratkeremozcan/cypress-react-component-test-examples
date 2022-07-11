import WindowSizeComponent from './WindowSizeComponent'

it('useWindowSizeComponent', () => {
  cy.viewport(100, 100)
  cy.mount(<WindowSizeComponent />)
  cy.contains('100 x 100')
})
