import App from './useContext-ThemeProvider'

describe('useContext', () => {
  it('should get the context from themeProvider', () => {
    cy.mount(<App />)

    cy.get('[data-cy-root=""] > div').should(
      'have.css',
      'background-color',
      'rgb(51, 51, 51)'
    )

    cy.getByCy('toggle').click()

    cy.get('[data-cy-root=""] > div').should(
      'have.css',
      'background-color',
      'rgb(204, 204, 204)'
    )
  })
})
