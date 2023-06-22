import App from './useMemo'

describe('useMemo', () => {
  it('should memoize slowFunction and call it again upon changing theme', () => {
    cy.window()
      .its('console')
      .then((console) => cy.spy(console, 'log').as('log'))
    cy.mount(<App />)

    cy.getByCy('number').clear()
    cy.get('@log').invoke('resetHistory')

    cy.get('@log').invoke('resetHistory')
    cy.getByCy('number').type('2')
    cy.get('@log').should('be.calledOnceWith', 'calling slow function')

    cy.getByCy('toggle-theme').click()
    cy.get('@log').should('be.calledOnce')
  })
})
