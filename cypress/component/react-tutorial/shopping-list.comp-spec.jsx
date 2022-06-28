/// <reference types="cypress" />
import React from 'react'

import ShoppingList from './shopping-list'

it(
  'says hello to different people',
  { viewportWidth: 600, viewportHeight: 400 },
  () => {
    cy.mount(<ShoppingList name="Murat" />)

    cy.contains('h1', 'Murat')
  }
)

// Examples from https://reactjs.org/tutorial/tutorial.html
