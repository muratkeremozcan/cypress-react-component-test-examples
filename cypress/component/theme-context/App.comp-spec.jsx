import React from 'react'
import { mount } from '@cypress/react'
import App from './App'
import { ThemeContext } from './context'
import { Toolbar } from './Toolbar.jsx'

it('Default Context renders', () => {
  mount(<App />)
  // the default "light" value was passed through React context
  cy.contains('button', 'light').should('be.visible')
})

it('Custom context renders', () => {
  // the label "dark" was passed through React context
  mount(
    <ThemeContext.Provider value="dark">
      <Toolbar />
    </ThemeContext.Provider>
  )
  cy.contains('button', 'dark').should('be.visible')
})
