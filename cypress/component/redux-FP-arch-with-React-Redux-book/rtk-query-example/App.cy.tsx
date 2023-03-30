import App from './App'

it('should', () => {
  cy.mount(<App />)
  cy.contains('Back to login').click()

  cy.getByCy('LoginForm').should('be.visible')
})
