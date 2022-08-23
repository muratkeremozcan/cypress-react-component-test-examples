import App from './App'
import './index.css'

describe('useTransition', () => {
  it('should use input to populate items', () => {
    cy.mount(<App />)
    cy.get('input').type('abc')

    cy.getByCyLike('item').should('have.length.gte', 1000).contains('abc')
  })
})
