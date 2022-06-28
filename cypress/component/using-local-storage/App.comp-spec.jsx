/// <reference types="cypress" />
import React from 'react'

import App from './App.jsx'

// localStorage with useEffect

// Shows how to set localStorage before mounting the component,
// and how to clear the local storage before each test.

describe('App', () => {
  // we need to clear the state before each test ourselves
  beforeEach(() => localStorage.clear('cart'))

  it('uses cart from localStorage', () => {
    const items = ['apples 🍎', 'oranges 🍊', 'grapes 🍇']

    localStorage.setItem('cart', JSON.stringify(items))

    cy.mount(<App />)

    cy.get('.item').should('have.length', 3)
    cy.contains('.item', 'oranges 🍊').should('be.visible')
  })

  it('updates localStorage after adding an item to the cart', () => {
    cy.mount(<App />)
    cy.contains('.item', 'kiwi 🥝').should('be.visible')
    cy.contains('Add juice').click()
    cy.contains('.item', 'juice 🧃')

    // the new item should be added to localStorage
    // make an assertion retry so even if the localStorage
    // is updated after a delay, the assertion waits for it

    cy.wrap(localStorage)
      .invoke('getItem', 'cart')
      .should('equal', JSON.stringify(['kiwi 🥝', 'juice 🧃']))
  })
})
