import App from './App'
it('should render the list', () => {
  cy.mount(<App />)

  cy.get('input').type('abc')

  cy.getByCyLike('item').should('have.length.gte', 100)
  cy.getByCyLike('item').each((item) => cy.wrap(item).should('contain', 'abc'))
})
