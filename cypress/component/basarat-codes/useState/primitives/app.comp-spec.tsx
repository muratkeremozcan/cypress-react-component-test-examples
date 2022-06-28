import App from './App'

describe('App', () => {
  it('should render', () => {
    cy.mount(<App />)

    cy.getByCy('count').should('contain', '0').click().should('contain', '2')
  })
})
