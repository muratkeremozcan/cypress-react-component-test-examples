/// <reference types="cypress" />
import React from 'react'

import { App } from './app.jsx'
import { MemoryRouter } from 'react-router-dom'

// question: how do we see the url in a component test?
describe('React Memory Router', () => {
  it('navigates through the link without changing url', () => {
    cy.viewport(600, 300)

    cy.mount(
      <MemoryRouter initialEntries={['/about', '/two', { pathname: '/three ' }]} initialIndex={0}>
        <App />
      </MemoryRouter>
    )

    // we are mocking the initial open route with `initialIndex`
    // so we should see "About" component
    cy.log('**About** component')
    cy.contains('h2', 'About')

    // Go to home route
    cy.contains('a', 'Home').click()

    cy.log('**Home** component')
    cy.contains('h2', 'Home') // from the "Home" component

    // Go to about route
    cy.log('back to **About** component')
    cy.contains('a', 'About').click()

    cy.contains('h2', 'About')
  })
})
