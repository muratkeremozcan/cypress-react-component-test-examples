import React from 'react'

import Counter from './counter.jsx'

it('intermediate useState hook', () => {
  cy.mount(<Counter />)

  cy.wrap(Cypress._.range(0, 3)).each((index) =>
    cy.getByCy('product-button').eq(index).click()
  )

  cy.getByCy('cart-item').should('have.length', 3)
})
