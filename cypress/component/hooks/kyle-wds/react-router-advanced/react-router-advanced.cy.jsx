import App from './app'
import { BrowserRouter as Router } from 'react-router-dom'

describe('react router', () => {
  context('click on links to get a route', () => {
    beforeEach(() => {
      cy.mount(
        <Router>
          <App />
        </Router>
      )
    })
    it('should nav to Home, not found', () => {
      cy.contains('Books').click().location('pathname').should('equal', '/books')

      cy.contains('Home').click().location('pathname').should('equal', '/')

      cy.contains('Not found')
        .should('have.css', 'color', 'rgb(0, 0, 0)')
        .click()
        .should('have.css', 'color', 'rgb(255, 0, 0)')
        .location('pathname')
        .should('equal', '/not-found')
    })

    it(' should nav to books, book 1, 2 and new ', () => {
      cy.contains('Books').click().location('pathname').should('equal', '/books')
      cy.getByCy('sidebar').should('be.visible')

      cy.contains('Book 1').click().location('pathname').should('equal', '/books/1')
      cy.getByCy('sidebar').should('not.exist')

      cy.contains('Book 2').click().location('pathname').should('equal', '/books/2')
      cy.getByCy('sidebar').should('not.exist')

      cy.contains('New Book').click().location('pathname').should('equal', '/books/new')
      cy.getByCy('sidebar').should('not.exist')

      cy.contains('Books').click()
      cy.getByCy('sidebar').should('be.visible')
    })
  })

  context('trick the CT runner into having a url', () => {
    it.only('should navigate to /books/new', () => {
      window.history.pushState({}, null, '/books/new')
      cy.mount(
        <Router>
          <App />
        </Router>
      )

      cy.location('pathname').should('equal', '/books/new')
      cy.getByCy('sidebar').should('not.exist')
    })

    it('should navigate to /books', () => {
      window.history.pushState({}, null, '/books')
      cy.mount(
        <Router>
          <App />
        </Router>
      )

      cy.location('pathname').should('equal', '/books')
      cy.getByCy('sidebar').should('be.visible')
    })
  })
})
