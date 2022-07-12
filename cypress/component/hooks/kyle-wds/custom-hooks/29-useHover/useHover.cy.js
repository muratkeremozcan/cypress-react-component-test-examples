import HoverComponent from './HoverComponent'

it('useHover', () => {
  cy.mount(<HoverComponent />)

  cy.getByCy('element').should('have.css', 'background-color', 'rgb(255, 0, 0)')

  cy.getByCy('element').realHover()

  cy.getByCy('element').should('have.css', 'background-color', 'rgb(0, 0, 255)')
})
