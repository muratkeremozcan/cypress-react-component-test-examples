import { Provider, atom, useAtomValue, useSetAtom } from 'jotai'

// themeAtom: A primitive atom that holds a string value, representing the current theme.
const themeAtom = atom('light')

// ThemeSwitcher: A component that uses useSetAtom to update the themeAtom
// and useAtomValue to read the current theme value.
const ThemeSwitcher = () => {
  const setTheme = useSetAtom(themeAtom)
  const theme = useAtomValue(themeAtom)

  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light')

  return (
    <div>
      <h2>Current Theme: {theme}</h2>
      <button onClick={toggleTheme}>ToggleTheme</button>
    </div>
  )
}

// uses useAtomValue to read the current theme value from themeAtom
function App() {
  const theme = useAtomValue(themeAtom)

  return (
    <div
      data-cy="top-div"
      style={{
        backgroundColor: theme === 'light' ? '#fff' : '#333',
        color: theme === 'light' ? '#333' : '#fff'
      }}
    >
      <h1>Theme Switcher</h1>
      <ThemeSwitcher />
    </div>
  )
}

it('useSetAtom & useAtomValue example', () => {
  cy.mount(
    <Provider>
      <App />
    </Provider>
  )

  cy.contains('Current Theme: light')
  cy.getByCy('top-div').should('have.css', 'background-color', 'rgb(255, 255, 255)')

  cy.contains('button', 'ToggleTheme').click()
  cy.contains('Current Theme: dark')
  cy.getByCy('top-div').should('have.css', 'background-color', 'rgb(51, 51, 51)')
})
