import OnScreenComponent from './OnScreenComponent'

it('useOnScreen', () => {
  cy.mount(<OnScreenComponent />)

  cy.getByCy('header-2')
    .should('have.text', 'Header 2 ')
    .and('not.have.text', '(Visible)')

  cy.scrollTo(0, 300)

  cy.getByCy('header-2').should('have.text', 'Header 2 (Visible)')
})
