import React from 'react'

import Counter from './counter.jsx'

describe('basic useState hook', () => {
  it('works', () => {
    cy.mount(<Counter />)
    cy.contains('You clicked 0 times')
    cy.contains('Click me').click().click().click()

    cy.contains('You clicked 3 times')
  })
})
