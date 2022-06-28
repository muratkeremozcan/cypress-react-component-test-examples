import App from './useState-example'

describe('useState', () => {
  it('should change the state', () => {
    cy.mount(<App />)
    const initialState = 0
    cy.getByCy('count').should('contain', initialState)
    cy.getByCy('+').click()
    cy.getByCy('+').click()
    cy.getByCy('count').should('contain', initialState + 2)
    cy.getByCy('-').click()
    cy.getByCy('count').should('contain', initialState + 1)
  })
})
