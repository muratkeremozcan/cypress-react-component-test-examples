import App from './useContext'

describe('useContext', () => {
  it('should share context between the children', () => {
    cy.mount(<App />)

    cy.getByCy('fn').should('have.css', 'background-color', 'rgb(51, 51, 51)')
    cy.getByCy('class').should(
      'have.css',
      'background-color',
      'rgb(51, 51, 51)'
    )

    cy.getByCy('toggle').click()

    cy.getByCy('fn').should(
      'have.css',
      'background-color',
      'rgb(204, 204, 204)'
    )
    cy.getByCy('class').should(
      'have.css',
      'background-color',
      'rgb(204, 204, 204)'
    )
  })
})
