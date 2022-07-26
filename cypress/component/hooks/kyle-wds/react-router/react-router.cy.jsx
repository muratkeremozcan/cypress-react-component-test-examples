import App from './app'
import { BrowserRouter as Router } from 'react-router-dom'

describe('react router', () => {
  it('main renders about and home and I can navigate to those pages', () => {
    cy.mount(
      <Router>
        <>
          <App />
        </>
      </Router>
    )

    cy.contains('Books').click().location('pathname').should('equal', '/books')

    cy.contains('Home').click().location('pathname').should('equal', '/')

    cy.contains('Book 1')
      .click()
      .location('pathname')
      .should('equal', '/books/1')

    cy.contains('New Book')
      .click()
      .location('pathname')
      .should('equal', '/books/new')

    cy.contains('not found')
      .click()
      .location('pathname')
      .should('equal', '/not-found')
  })
})
