/// <reference types="cypress" />
import React from 'react'

import { Users } from './fetch.jsx'

// assuming "experimentalFetchPolyfill": true in cypress.json
describe('Uses Fetch API directly', () => {
  it('can api test the real data - just for the record', () => {
    cy.request({
      // same or similar URL to the one the component is using
      url: 'https://jsonplaceholder.cypress.io/users?_limit=3'
    })
      .its('body')
      .should('have.length', 3)

    cy.request({
      url: 'https://jsonplaceholder.cypress.io/users/1'
    })
      .its('body')
      .should('include', {
        id: 1,
        name: 'Leanne Graham'
      })
  })

  it('can inspect real data in XHR', () => {
    cy.intercept('/users?_limit=3').as('users')
    cy.mount(<Users />)

    cy.get('li').should('have.length', 3)

    cy.wait('@users')
      .its('response.body')
      .should('have.length', 3)
      .its(0)
      .should('include.keys', ['id', 'name', 'username', 'email'])
  })

  context('stubbing the XHR or window fetch', () => {
    const userStub = [{ id: 1, name: 'foo' }]
    it('can stub XHR response', () => {
      cy.intercept('GET', '/users?_limit=3', userStub).as('userStub')
      cy.mount(<Users />)

      cy.wait('@userStub').its('response.body').should('deep.equal', userStub)
      cy.get('li').should('have.length', 1).first().contains('foo')
    })

    it('can delay and wait on stub XHR response', () => {
      cy.intercept(
        {
          method: 'GET',
          url: '/users?_limit=3' // can also use path, but not pathname
        },
        {
          body: userStub,
          delay: 500
        }
      ).as('userStub')

      cy.mount(<Users />)
      cy.get('li').should('have.length', 0)
      cy.wait('@userStub')
      cy.get('li').should('have.length', 1)
    })

    // you can go one level lower than XHRs, and stub at window level
    it('stub fetch at window level using cy.stub(window, fetch)', () => {
      cy.stub(window, 'fetch').resolves({
        json: cy.stub().resolves(userStub).as('userStub')
      })

      cy.mount(<Users />)
      cy.get('li').should('have.length', 1)
      cy.get('@userStub').should('have.been.calledOnce')
    })
  })
})
