/// <reference types="cypress" />
import React from 'react'

// https://github.com/bahmutov/@cypress/react/issues/184
Cypress.Commands.add('myMount', () => {
  return cy.mount(<div>My mount</div>)
})

Cypress.Commands.add('myMount2', () => {
  const toMount = React.createElement('div', null, ['mount 2'])

  return cy.mount(toMount)
})

describe('Wrapped mount in custom command', () => {
  it('works', () => {
    cy.myMount()
    cy.contains('My mount')
  })

  it('works using React.createElement', () => {
    cy.myMount2()
    cy.contains('mount 2')
  })
})
