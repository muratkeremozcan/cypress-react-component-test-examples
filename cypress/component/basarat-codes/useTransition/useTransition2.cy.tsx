import App from './App'
import './index.css'

// TODO: merge the tests together once the defect is fixed
// https://github.com/cypress-io/cypress/issues/23081
// probably with 10.5.0

describe('useTransition', () => {
  it('should use random to populate items', () => {
    cy.mount(<App />)
    cy.get('button').click()

    cy.getByCyLike('item').should('have.length.gt', 100)
  })
})
