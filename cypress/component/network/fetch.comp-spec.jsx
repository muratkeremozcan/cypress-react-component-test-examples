/* eslint-disable no-undef */
/// <reference types="cypress" />
import React from 'react'
import { mount } from '@cypress/react'
import { Users } from './fetch.jsx'

// assuming "experimentalFetchPolyfill": true in cypress.json
describe('Uses Fetch API directly', () => {
  it('can inspect real data in XHR', () => {
    cy.intercept('/users?_limit=3').as('users')
    mount(<Users />)

    cy.get('li').should('have.length', 3)

    cy.wait('@users')
      .its('response.body')
      .should('have.length', 3)
      .its(0)
      .should('include.keys', ['id', 'name', 'username', 'email'])
  })

  it('can mock XHR response', () => {
    const userStub = [{ id: 1, name: 'foo' }]
    cy.intercept('GET', '/users?_limit=3', userStub).as('userStub')
    mount(<Users />)

    cy.wait('@userStub').its('response.body').should('deep.equal', userStub)
    cy.get('li').should('have.length', 1).first().contains('foo')
  })

  it('can delay and wait on mock XHR response', () => {
    const userStub = [{ id: 1, name: 'foo' }]

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

    mount(<Users />)
    cy.get('li').should('have.length', 0)
    cy.wait('@userStub')
    cy.get('li').should('have.length', 1)
  })
})
