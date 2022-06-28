import React from 'react'

import Fetcher from './fetcher'

describe('Testing lib vs normal', () => {
  beforeEach(() => {
    cy.intercept('GET', '/greeting', { greeting: 'Hello there' }).as('greet')
    // cy.intercept example, same thing as the above, more elaborate
    // cy.intercept(
    //   {
    //     method: 'GET',
    //     url: '/greeting'
    //   },
    //   {
    //     body: { greeting: 'Hello there' }
    //   }
    // ).as('greet')

    cy.mount(<Fetcher url={'/greeting'} />)
  })

  const commonAssertion = () =>
    cy
      .get('@greet')
      .should('not.be.null')
      .its('response.url')
      .should('match', /\/greeting$/)

  it('with default Cypress commands', () => {
    cy.contains('Load Greeting').click()

    cy.get('[role=heading]').should('have.text', 'Hello there')
    cy.get('[role=button]').should('be.disabled')

    commonAssertion()
  })

  it('same thing with testing lib', () => {
    cy.findByText('Load Greeting').click()

    cy.findByRole('heading').should('have.text', 'Hello there')
    cy.findByRole('button').should('be.disabled')

    commonAssertion()
  })
})
