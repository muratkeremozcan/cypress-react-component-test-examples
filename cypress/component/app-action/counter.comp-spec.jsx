/// <reference types="cypress" />
import React from 'react'

import { Counter } from './counter.jsx'

/* eslint-env mocha */
describe('Counter with app action', () => {
  it('no regression after adding if(window.Cypress) window.myComponent = this', () => {
    cy.mount(<Counter />)
    cy.contains('count: 0')
      .click()
      .contains('count: 1')
      .click()
      .contains('count: 2')
  })

  it('allows access via reference', () => {
    cy.mount(<Counter />)

    // the window.counter was set from the Counter's constructor
    cy.window()
      .should('have.property', 'counter')
      .its('state')
      .should('deep.equal', { count: 0 })

    // let's change the state of the component
    const myComponent = () => cy.window().its('counter')

    myComponent().invoke('setState', {
      count: 101
    })

    // the UI should update to reflect the new count
    cy.contains('count: 101').should('be.visible')
  })
})
