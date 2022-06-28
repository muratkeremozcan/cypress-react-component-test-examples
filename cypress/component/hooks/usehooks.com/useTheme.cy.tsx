import { useLayoutEffect } from 'react'

import './styles.css'

// Usage
const theme = {
  'button-padding': '16px',
  'button-font-size': '14px',
  'button-border-radius': '4px',
  'button-border': 'none',
  'button-color': '#FFF',
  'button-background': '#6772e5',
  'button-hover-border': 'none',
  'button-hover-color': '#FFF'
}

// This is type of "theme" object, kind of dynamic type
interface Theme {
  [name: string]: string
}

function useTheme(theme: Theme): void {
  useLayoutEffect(
    (): void => {
      // Iterate through each value in theme object
      for (const key in theme) {
        // Update css variables in document's root element
        document.documentElement.style.setProperty(`--${key}`, theme[key])
      }
    },
    [theme] // Only call again if theme object reference changes
  )
}

function App() {
  useTheme(theme)

  return (
    <div>
      <button className="button">Button</button>
    </div>
  )
}

it('useTheme', () => {
  cy.mount(<App />)
  cy.get('button').should('have.css', 'background-color', 'rgb(103, 114, 229)')
})
