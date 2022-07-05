import App from './state-reducer'

describe('state reducer', () => {
  it('should minversion of control to give the consumer of the hook full control', () => {
    cy.mount(<App />)

    Cypress._.times(4, () => {
      cy.get('.toggle-btn').click()
    })
    cy.contains('Whoa')

    cy.contains('button', 'Reset').click()
    cy.get('[data-testid="click-count"]').should('not.exist')
  })
})
