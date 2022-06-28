import App from './App'

describe('App', () => {
  it('should render error', () => {
    // don't fail on uncaught exception, so that we can test it
    Cypress.on('uncaught:exception', () => false)
    cy.clock()
    cy.mount(<App />)
    cy.contains('Loading message...')
    cy.getByCy('toggle').click()
    cy.tick(2000)

    cy.contains('Oops!')
  })

  it('should render data', () => {
    cy.clock()
    cy.mount(<App />)
    cy.contains('Loading message...')
    cy.tick(2000)

    cy.contains('Hello Data')
  })
})
