import React from 'react'

import CounterWithHooks from './counter-with-hooks.jsx'

describe('hook with callback and effect', function () {
  it('changes document title', function () {
    cy.mount(<CounterWithHooks />)
    cy.contains('0')
    cy.document().should(
      'have.property',
      'title',
      'You clicked 0 times while using effect'
    )

    cy.log('Clicking changes document title')
    cy.get('#increment').click().click()

    cy.document().should(
      'have.property',
      'title',
      'You clicked 2 times while using effect'
    )
  })
})
