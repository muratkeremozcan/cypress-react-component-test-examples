/// <reference types="cypress" />
import React from 'react'

import { App } from './app.jsx'
import { BrowserRouter as Router, MemoryRouter } from 'react-router-dom'

// We are testing the navigation in the app.jsx when it is surrounded by a React Router from react-router-dom

// this spec uses BrowserRouter
// in-memory-spec.js uses MemoryRouter

describe('React Router', () => {
  it('shows links', () => {
    cy.viewport(600, 300)

    cy.mount(
      <Router>
        <>
          <App />
        </>
      </Router>
    )

    cy.get('nav').should('be.visible')
    cy.contains('Home').click().location('pathname').should('equal', '/') // Home route

    cy.contains('h2', 'Home')
    cy.contains('About').click().location('pathname').should('equal', '/about') // About route
  })
})
