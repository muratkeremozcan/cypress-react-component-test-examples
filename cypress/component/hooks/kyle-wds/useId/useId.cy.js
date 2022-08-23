import App from './App'

describe('useId', () => {
  it('should ', () => {
    cy.mount(<App />)

    cy.get('[for=":r0:-email"]').click()
    cy.getByCyLike('email').first().should('be.focused')

    cy.get('[for=":r1:-name"]').click()
    cy.getByCyLike('name').last().should('be.focused')
  })
})
