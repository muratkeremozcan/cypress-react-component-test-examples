import React from 'react'
// import ReactDom from 'react-dom'
import { mount } from '@cypress/react'
import CounterWithHooks from './counter-with-hooks.jsx'

describe('CounterWithHooks component', () => {
  it('counts clicks 2', () => {
    // mount(<CounterWithHooks initialCount={3} />, { React, ReactDom }) // why this? no difference
    mount(<CounterWithHooks initialCount={3} />)
    cy.contains('3')
    cy.get('#increment').click()
    cy.contains('4')
    cy.get('#increment').click()
    cy.contains('5')
  })
})
