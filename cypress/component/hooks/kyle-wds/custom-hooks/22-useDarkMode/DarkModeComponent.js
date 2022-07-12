import useDarkMode from './useDarkMode'
import './body.css'

export default function DarkModeComponent() {
  const [darkMode, setDarkMode] = useDarkMode()

  return (
    <button
      onClick={() => setDarkMode((prevMode) => !prevMode)}
      style={{
        border: `1px solid ${darkMode ? 'white' : 'black'}`,
        background: 'none',
        color: darkMode ? 'white' : 'black'
      }}
    >
      Toggle Dark Mode
    </button>
  )
}
