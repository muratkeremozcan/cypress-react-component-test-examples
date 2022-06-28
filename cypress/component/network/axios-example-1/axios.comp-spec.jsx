/// <reference types="cypress" />
import React from 'react'

import { Users } from './axios.jsx'

// Axios to GET a list of users.
// Axios uses XMLHttpRequest to receive the data

describe('Uses Axios (which uses XMLHttpRequest) to GET a list of users.', () => {
  const userStub = [{ id: 101, name: 'Test user' }]

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

  it('can mock XHR response', () => {
    cy.intercept('GET', '/users?_limit=3', userStub).as('userStub')
    cy.mount(<Users />)

    cy.wait('@userStub').its('response.body').should('deep.equal', userStub)
    cy.get('li').should('have.length', 1).first().contains(userStub[0].name)
  })

  it('can delay and wait on mock XHR response', () => {
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

  // to mock CommonJS module loaded from `node_modules` use "require" in spec file
  const Axios = require('axios')

  it('can mock axios.get itself', () => {
    cy.stub(Axios, 'get')
      .resolves({
        data: userStub
      })
      .as('get')

    cy.mount(<Users />)
    // only the test user should be shown
    cy.get('li').should('have.length', 1)
    cy.get('@get').should('have.been.called')
  })
})
