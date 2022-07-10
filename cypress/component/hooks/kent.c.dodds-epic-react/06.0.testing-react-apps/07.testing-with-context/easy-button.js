import * as React from 'react'
import EasyButton from './easy-button-comp'
import { ThemeProvider, useTheme } from './theme'

function App() {
  return (
    <ThemeProvider>
      <h1>Hit the easy button!</h1>
      <hr />
      <EasyButton onClick={() => alert('that was easy')}>Easy!</EasyButton>
      <hr />
      <ThemeToggler />
    </ThemeProvider>
  )
}

function ThemeToggler() {
  const [theme, setTheme] = useTheme()
  return (
    <button
      data-cy="toggle-theme"
      onClick={() => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))}
    >
      Toggle theme: {theme}
    </button>
  )
}

export default App
