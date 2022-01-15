import React from 'react'
import { mount } from '@cypress/react'
import Counter from './counter.jsx'

it('intermediate hook', () => {
  mount(<Counter />)

  cy.wrap(Cypress._.range(0, 3)).each((index) =>
    cy.getByCy('product-button').eq(index).click()
  )

  cy.getByCy('cart-item').should('have.length', 3)
})
