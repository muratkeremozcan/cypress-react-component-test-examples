import React from 'react'
import { useTheme, useThemeUpdate } from './ThemeContext'

export default function FunctionContextWithProvider() {
  // (5) we import and use custom hooks from the ThemeProvider
  const darkTheme = useTheme()
  const toggle = useThemeUpdate()

  console.log('darkTheme', darkTheme)

  const themeStyles = {
    backgroundColor: darkTheme ? '#333' : '#ccc',
    color: darkTheme ? '#ccc' : '#333',
    padding: '2rem',
    margin: '2rem'
  }
  return (
    <>
      <button data-cy="toggle" onClick={toggle}>
        Toggle Theme
      </button>
      <div style={themeStyles}>Function Theme</div>
    </>
  )
}
