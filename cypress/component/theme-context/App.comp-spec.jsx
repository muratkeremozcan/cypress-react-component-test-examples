import React from 'react'
import { mount } from '@cypress/react'
import App from './App'
import { ThemeContext } from './context'
import { Toolbar } from './Toolbar.jsx'

it('Context example renders', () => {
  mount(<App />)
  // the label "dark" was passed through React context
  cy.contains('button', 'dark').should('be.visible')
})

it('Mock Context passes given value', () => {
  mount(
    <ThemeContext.Provider value="mocked">
      <Toolbar />
    </ThemeContext.Provider>
  )

  // the label "mocked" was passed through React context
  cy.contains('button', 'mocked').should('be.visible')
})
