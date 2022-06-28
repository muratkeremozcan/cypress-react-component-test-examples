import React from 'react'
// import ReactDom from 'react-dom'

import CounterWithHooks from './counter-with-hooks.jsx'

describe('hook with callback', () => {
  it('starts at 3, clicks 2 times', () => {
    // cy.mount(<CounterWithHooks initialCount={3} />, { React, ReactDom }) // why this? no difference
    cy.mount(<CounterWithHooks initialCount={3} />)
    cy.contains('3')
    cy.get('#increment').click()
    cy.contains('4')
    cy.get('#increment').click()
    cy.contains('5')
  })
})
