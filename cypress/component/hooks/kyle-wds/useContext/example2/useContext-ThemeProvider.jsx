// https://www.youtube.com/watch?v=5LrDIWkK_Bc&t=1s
import React from 'react'
import FunctionContextWithProvider from './FunctionContextWithProvider'
import { ThemeProvider } from './ThemeContext'

// (6) we can simplify the usage of the context api
export default function App() {
  return (
    <>
      <ThemeProvider>
        <FunctionContextWithProvider />
      </ThemeProvider>
    </>
  )
}
