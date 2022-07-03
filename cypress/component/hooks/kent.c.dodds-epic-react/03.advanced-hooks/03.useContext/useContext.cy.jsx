import App from './useContext'

describe('useContext', () => {
  it('should share the context between the children', () => {
    cy.mount(<App />)
    cy.getByCy('count').contains(0)

    cy.getByCy('increment').dblclick()
    cy.getByCy('count').contains(2)
  })
})
