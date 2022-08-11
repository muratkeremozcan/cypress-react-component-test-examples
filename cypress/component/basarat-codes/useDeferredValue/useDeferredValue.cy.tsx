import App from './App'
describe('useDeferredValue', () => {
  it('should', () => {
    cy.mount(<App />)

    cy.get('input').type('abc')

    cy.getByCyLike('item').should('have.length.gt', 100).contains('abc')
  })
})
