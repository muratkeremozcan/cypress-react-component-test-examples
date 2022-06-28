/// <reference types="cypress" />
import React from 'react'

import { Users } from './2-users-named.jsx'

// to mock CommonJS module loaded from `node_modules` use "require" in spec file
// all do the same thing
// const Axios = require('axios')
import Axios from 'axios'
// import * as Axios from 'axios'

describe('Mocking Axios named import get makes no difference in the test', () => {
  const userStub = [{ id: 101, name: 'Test user' }]

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
