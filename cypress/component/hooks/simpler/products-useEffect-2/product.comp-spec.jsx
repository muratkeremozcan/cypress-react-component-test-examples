import React from 'react'
import { mount } from '@cypress/react'
import ProductList from './product-list'

it('complex useState & useEffect example', () => {
  mount(<ProductList></ProductList>)

  cy.getByCyLike('product-').should('have.length', 3)
  cy.get('button').click()

  cy.getByCy('selected-product').then((selectedProduct) =>
    cy
      .getByCyLike('product-')
      .first()
      .then((firstProduct) =>
        expect(firstProduct.text()).to.equal(selectedProduct.text())
      )
  )
})
