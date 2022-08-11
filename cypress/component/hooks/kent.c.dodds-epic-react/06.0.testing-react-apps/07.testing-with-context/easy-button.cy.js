import EasyButton from './easy-button'
import { ThemeProvider } from './theme'

// TODO: ask DX why we cannot change the initialTheme prop and see the component mounted with that
it('renders with the styles for the light theme - raw', () => {
  cy.mount(
    <ThemeProvider initialTheme="light">
      <EasyButton>Easy</EasyButton>,
    </ThemeProvider>
  )

  cy.getByCy('easy-btn')
    .should('have.css', 'background-color', 'rgb(255, 255, 255)')
    .and('have.css', 'color', 'rgb(0, 0, 0)')

  cy.getByCy('toggle-theme').click()
  cy.getByCy('easy-btn')
    .should('have.css', 'background-color', 'rgb(0, 0, 0)')
    .and('have.css', 'color', 'rgb(255, 255, 255)')
})

it('renders with the styles for the light theme - wrapper ', () => {
  const Wrapper = ({ children }) => (
    <ThemeProvider initialTheme="light">{children}</ThemeProvider>
  )

  cy.mount(<EasyButton>Easy</EasyButton>, { wrapper: Wrapper })

  cy.getByCy('easy-btn')
    .should('have.css', 'background-color', 'rgb(255, 255, 255)')
    .and('have.css', 'color', 'rgb(0, 0, 0)')
})

it('renders with the styles for the light theme - helper', () => {
  const renderWithProvider = (ui, { theme = 'light', ...options } = {}) => {
    const Wrapper = ({ children }) => (
      <ThemeProvider initialTheme={theme}>{children}</ThemeProvider>
    )
    return cy.mount(ui, { wrapper: Wrapper, ...options })
  }

  renderWithProvider(<EasyButton>Easy</EasyButton>, { theme: 'light' })

  cy.getByCy('easy-btn')
    .should('have.css', 'background-color', 'rgb(255, 255, 255)')
    .and('have.css', 'color', 'rgb(0, 0, 0)')
})

// https://github.com/cypress-io/cypress/issues/14672#issuecomment-900825353
Cypress.Commands.add('mountWithProvider', (children, { theme = 'light' }) =>
  cy.mount(<ThemeProvider initialTheme={theme}>{children}</ThemeProvider>)
)

it('should mount with theme', () => {
  cy.mountWithProvider(<EasyButton>Easy</EasyButton>, { theme: 'light' })
  cy.getByCy('easy-btn')
    .should('have.css', 'background-color', 'rgb(255, 255, 255)')
    .and('have.css', 'color', 'rgb(0, 0, 0)')
})

// 1:1 comparison with RTL
// https://github.com/muratkeremozcan/epic-react-testingJs/blob/main/epic-react/06.testing-react-apps/src/__tests__/exercise/07.js
