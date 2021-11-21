/* eslint-disable no-undef */
/// <reference types="cypress" />
import React from 'react'
import { mount } from '@cypress/react'
import Hello from './hello.jsx'

it('says hello to different people', () => {
  mount(<Hello />)
  cy.contains('Hey, stranger')

  mount(<Hello name="Murat" />)
})

// Examples from https://reactjs.org/tutorial/tutorial.html
