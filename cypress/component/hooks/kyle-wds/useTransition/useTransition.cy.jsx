import App from './app'

it('useTransition', () => {
  cy.mount(<App />)

  cy.get('input').type('abc')
  cy.getByCyLike('item').should('have.length', 1000).contains('abc')
})
