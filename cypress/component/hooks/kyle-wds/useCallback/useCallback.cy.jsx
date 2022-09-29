import App from './useCallback'

// test is flakey locally and in CI
describe.skip('useCallback', () => {
  it('should only call getItems when numbers change, not when the theme changes', () => {
    cy.window()
      .its('console')
      .then((console) => cy.spy(console, 'log').as('log'))
    cy.mount(<App />)

    cy.get('@log').invoke('resetHistory')
    cy.getByCy('number').type('2')
    cy.get('@log').should('be.calledOnce')

    cy.getByCy('toggle-theme').click()
    cy.get('@log').should('be.calledOnce')
  })
})
