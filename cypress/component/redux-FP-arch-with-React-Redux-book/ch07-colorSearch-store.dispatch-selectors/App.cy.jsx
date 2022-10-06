import App from './App'

describe('App', () => {
  it('should render', () => {
    cy.mount(<App />)

    cy.get('input').type('black')
    cy.getByCy('color-black').should('be.visible')
    cy.getByCy('color-red').should('not.exist')
  })
})
