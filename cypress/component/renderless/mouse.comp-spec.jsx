/// <reference types="cypress" />
import React from 'react'
import MouseMovement from './mouse-movement'

describe('Renderless component', () => {
  it('works', () => {
    // let's also spy on "console.log" calls
    // to make sure the entire sequence of calls happens
    cy.window()
      .its('console')
      .then((console) => {
        cy.spy(console, 'log').as('log')
      })

    const onMoved = cy.stub()

    cy.mount(<MouseMovement onMoved={onMoved} />)
    cy.document()
      .trigger('mousemove')
      .then(() => {
        expect(onMoved).to.have.been.calledWith(true)
      })
  })
})
