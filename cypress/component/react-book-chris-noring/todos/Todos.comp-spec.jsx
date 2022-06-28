/// <reference types="cypress" />

import React from 'react'
import Todos from './Todos'
import pretty from 'pretty'
import { stripIndent } from 'common-tags'

it('Todo - should create snapshot', () => {
  cy.viewport(400, 400)
  cy.mount(
    <Todos
      todos={[
        { title: 'item1', description: 'an item' },
        { title: 'item2', description: 'another item' }
      ]}
    />
  )

  cy.getByCy('item').should('have.length', 2)

  // entire test area
  cy.getByCy('item')
    .parent()
    .invoke('html')
    .then(pretty)
    .should(
      'eq',
      stripIndent`
        <h3 data-cy="item" class="">item1</h3>
        <div>an item</div><button>Select</button>
        <h3 data-cy="item" class="">item2</h3>
        <div>another item</div><button>Select</button>
      `
    )

  cy.contains('[data-cy=item]', 'item1').should('be.visible')
  // selecting works
  cy.contains('[data-cy=item]', 'item2')
    .next()
    .should('have.text', 'another item')
    .next()
    .should('have.text', 'Select')
    .click()

  cy.contains('[data-cy=item]', 'item2').should('have.class', 'selected')
})
