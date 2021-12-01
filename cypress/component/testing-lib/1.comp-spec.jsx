import React from 'react'
import { mount } from '@cypress/react'
import Fetcher from './fetcher'

describe('Testing lib vs normal', () => {
  beforeEach(() => {
    cy.intercept('GET', '/greeting', { greeting: 'Hello there' }).as('greet')
    // cy.intercept example, same thing, more elaborate
    // cy.intercept(
    //   {
    //     method: 'GET',
    //     url: '/greeting'
    //   },
    //   {
    //     body: { greeting: 'Hello there' }
    //   }
    // ).as('greet')

    mount(<Fetcher url={'/greeting'} />)
  })

  it('with default Cypress commands', () => {
    cy.contains('Load Greeting').click()

    cy.get('[role=heading]').should('have.text', 'Hello there')
    cy.get('[role=button]').should('be.disabled')
    cy.get('@greet')
      .its('response.url')
      .should('match', /\/greeting$/)
  })

  it('same thing with testing lib', () => {
    cy.findByText('Load Greeting').click()

    cy.findByRole('heading').should('have.text', 'Hello there')
    cy.findByRole('button').should('be.disabled')
    cy.get('@greet')
      .its('response.url')
      .should('match', /\/greeting$/)
  })
})
