import DarkModeComponent from './DarkModeComponent'
import './body.css'

it('useDarkMode', () => {
  cy.mount(<DarkModeComponent />)

  cy.get('body')
    .should('have.class', 'dark-mode')
    .and('have.css', 'background-color', 'rgb(51, 51, 51)')

  cy.get('button').click().click()
  cy.get('body')
    .should('not.have.class', 'dark-mode')
    .and('have.css', 'background-color', 'rgba(0, 0, 0, 0)')
})
