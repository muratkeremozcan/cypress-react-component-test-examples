import App from './app'

describe('useDeferredValue', () => {
  it('should ', () => {
    cy.mount(<App />)
    cy.get('input').type('abc')
    cy.getByCyLike('item').should('have.length.gte', 1000).contains('abc')
  })
})
