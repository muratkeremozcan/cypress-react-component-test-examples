import React from 'react'
import { ThemeContext } from './context'
import { Toolbar } from './Toolbar.jsx'

it('Mock Context passes given value', () => {
  cy.mount(
    <ThemeContext.Provider value="mocked">
      <Toolbar />
    </ThemeContext.Provider>
  )

  // the label "mocked" was passed through React context
  cy.contains('button', 'mocked').should('be.visible')
})
