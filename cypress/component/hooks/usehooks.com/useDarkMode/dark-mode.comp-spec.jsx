import React from 'react'
import useDarkMode from './use-dark-mode'
import Toggle from './Toggle'
import Content from './Content'
import './styles.css'

function App() {
  const [darkMode, setDarkMode] = useDarkMode()

  return (
    <div>
      <div className="navbar">
        <Toggle darkMode={darkMode} setDarkMode={setDarkMode} />
      </div>
      <Content />
    </div>
  )
}

describe('Dark Mode', () => {
  it('should toggle to dark mode', () => {
    cy.wrap(localStorage).invoke('setItem', 'dark-mode-enabled', false)
    cy.mount(<App />)
    cy.get('#dmcheck').should('not.be.checked')

    cy.get('.toggle-control').click()

    cy.wrap(localStorage)
      .invoke('getItem', 'dark-mode-enabled')
      .should('equal', 'true')
    cy.get('#dmcheck', { timeout: 10000 }).should('be.checked')
  })

  it('should toggle to light mode', () => {
    cy.wrap(localStorage).invoke('setItem', 'dark-mode-enabled', true)
    cy.mount(<App />)
    cy.get('#dmcheck').should('be.checked')

    cy.wrap(localStorage)
      .invoke('getItem', 'dark-mode-enabled')
      .should('equal', 'true')
    cy.get('.toggle-control').click()
    cy.get('#dmcheck').should('not.be.checked')
  })
})

// also take a look at Gleb's example
// https://github.com/bahmutov/react-dark-mode/blob/master/src/DarkMode.spec.ct.tsx
