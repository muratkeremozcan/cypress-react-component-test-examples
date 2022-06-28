/// <reference types="cypress" />
import React from 'react'

import Square from './square'

it(
  'says hello to different people',
  { viewportWidth: 600, viewportHeight: 400 },
  () => {
    cy.mount(<Square value="X" />)
    cy.on('window:alert', cy.stub().as('alerted'))

    cy.get('.square').click()
    cy.get('@alerted').should('have.been.calledWithExactly', 'click')

    cy.get('.square').should('have.text', 'X')
  }
)

// Examples from https://reactjs.org/tutorial/tutorial.html
