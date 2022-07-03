// https://www.youtube.com/watch?v=5LrDIWkK_Bc&t=1s
import React, { useState } from 'react'
import ClassContextComponent from './ClassContextComponent'
import FunctionContextComponent from './FunctionContextComponent'

// (1) createContext
export const ThemeContext = React.createContext()

export default function App() {
  const [darkTheme, setDarkTheme] = useState(true)

  const toggleTheme = () => setDarkTheme((prevDarkTheme) => !prevDarkTheme)

  // context api let's us share props as state for all the children of the provider
  return (
    <>
      <ThemeContext.Provider value={darkTheme}>
        <button data-cy="toggle" onClick={toggleTheme}>
          Toggle Theme
        </button>
        <FunctionContextComponent />
        <ClassContextComponent />
      </ThemeContext.Provider>
    </>
  )
}
