/// <reference types="cypress" />
import Card from './card-without-effect.jsx'
import React from 'react'

// example from https://reactjs.org/docs/testing-recipes.html#timers

// Your code might use timer-based functions like setTimeout to schedule more work in the future.
// In this example, a multiple choice panel waits for a selection and advances,
// timing out if a selection isn’t made in 5 seconds.

it('should select null after timing out', () => {
  // without synthetic clock we must wait for the real delay
  const onSelect = cy.stub().as('selected')

  cy.mount(<Card onSelect={onSelect} />)

  cy.get('@selected', { timeout: 6000 }).should('have.been.calledWith', null)
})

it('should select null after timing out - using cy.clock & cy.tick()', () => {
  const onSelect = cy.stub().as('selected')

  // https://on.cypress.io/clock
  cy.clock()
  cy.mount(<Card onSelect={onSelect} />)

  cy.tick(100)
  expect(onSelect).to.not.have.been.called

  cy.tick(5000)
  cy.get('@selected', { timeout: 6000 }).should('have.been.calledWith', null)
})

it('should accept selections', () => {
  const onSelect = cy.stub().as('selected')

  cy.mount(<Card onSelect={onSelect} />)
  cy.get("[data-testid='2']")
    .click()
    .then(() => expect(onSelect).to.have.been.calledWith(2))
})
