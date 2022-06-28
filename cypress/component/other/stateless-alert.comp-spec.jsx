/// <reference types="cypress" />
import HelloWorld from './stateless-alert.jsx'
import React from 'react'

describe('Stateless alert', () => {
  beforeEach(() => {
    const spy = cy.spy().as('alert') // can use cy.stub too

    cy.on('window:alert', spy)
    cy.mount(<HelloWorld name="React" />)
  })

  it('alerts with name', () => {
    cy.contains('Say Hi').click()
    cy.get('@alert')
      .should('have.been.calledOnce')
      .and('have.been.be.calledWithExactly', 'Hi React')
  })
})
