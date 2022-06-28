/// <reference types="cypress" />

import React from 'react'
import Select from './Note'

describe('Note', () => {
  it('save text', () => {
    cy.mount(<Select />)
    cy.get('#change').type('input text')
    cy.contains('button', 'Save').click()
    cy.getByCy('saved').should('have.text', 'Saved: input text')
  })

  it('load data', () => {
    cy.mount(<Select />)
    cy.contains('button', 'Load').click()
    // there is a built-in delay in loading the data
    // but we don't worry about it - we just check if the text eventually appears
    cy.getByCy('item')
      .should('have.length', 2)
      .and('be.visible')
      .first()
      .should('have.text', 'test')
  })
})
