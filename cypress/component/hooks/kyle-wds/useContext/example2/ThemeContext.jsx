import React, { useContext, useState } from 'react'

// (4) we can move the createContext to a ThemeProvider
const ThemeContext = React.createContext()
const ThemeUpdateContext = React.createContext()
// and  expose custom hooks inside our ThemeProvider
export const useTheme = () => useContext(ThemeContext)
export const useThemeUpdate = () => useContext(ThemeUpdateContext)

// (3) use a ThemeProvider to provide the context/props/values/state to the children
export function ThemeProvider({ children }) {
  const [darkTheme, setDarkTheme] = useState(true)

  const toggleTheme = () => setDarkTheme((prevDarkTheme) => !prevDarkTheme)

  return (
    <ThemeContext.Provider value={darkTheme}>
      <ThemeUpdateContext.Provider value={toggleTheme}>
        {children}
      </ThemeUpdateContext.Provider>
    </ThemeContext.Provider>
  )
}
