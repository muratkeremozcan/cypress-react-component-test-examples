import App from './App'
import './index.css'

describe('useId', () => {
  it('should focus on the right input when clicking the label', () => {
    cy.mount(<App />)

    cy.contains('First Name').click()
    cy.getByCyLike('firstName').first().should('be.focused')

    cy.get('[for=":r1:-lastName"]').click()
    cy.getByCyLike('lastName').last().should('be.focused')
  })
})
