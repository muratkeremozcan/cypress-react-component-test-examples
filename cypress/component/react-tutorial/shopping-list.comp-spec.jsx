/* eslint-disable no-undef */
/// <reference types="cypress" />
import React from 'react'
import { mount } from '@cypress/react'
import ShoppingList from './shopping-list'

it(
  'says hello to different people',
  { viewportWidth: 600, viewportHeight: 400 },
  () => {
    mount(<ShoppingList name="Murat" />)

    cy.contains('h1', 'Murat')
  }
)

// Examples from https://reactjs.org/tutorial/tutorial.html
