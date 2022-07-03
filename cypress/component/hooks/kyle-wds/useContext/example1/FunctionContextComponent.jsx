import { useContext } from 'react'
import { ThemeContext } from './useContext'

export default function FunctionContextComponent() {
  // (2) import and useContext
  const darkTheme = useContext(ThemeContext)

  console.log('darkTheme', darkTheme)

  const themeStyles = {
    backgroundColor: darkTheme ? '#333' : '#ccc',
    color: darkTheme ? '#ccc' : '#333',
    padding: '2rem',
    margin: '2rem'
  }
  return (
    <div data-cy="fn" style={themeStyles}>
      Function Theme
    </div>
  )
}
