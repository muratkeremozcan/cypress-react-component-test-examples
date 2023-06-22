import App from './useCallback'

describe('useCallback', () => {
  it('should only call getItems when numbers change, not when the theme changes', () => {
    cy.window()
      .its('console')
      .then((console) => cy.spy(console, 'log').as('log'))
    cy.mount(<App />)

    cy.getByCy('number').clear()
    cy.get('@log').invoke('resetHistory')
    cy.get('@log').should('not.have.been.called')

    cy.getByCy('number').type('2')
    cy.get('@log').should('be.calledOnce')

    cy.getByCy('toggle-theme').click()
    cy.get('@log').should('be.calledOnce')
  })
})
