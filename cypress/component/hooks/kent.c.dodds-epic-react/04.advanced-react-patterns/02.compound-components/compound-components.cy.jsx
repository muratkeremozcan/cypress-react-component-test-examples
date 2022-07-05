import App from './compound-components'

describe('flexible compound components', () => {
  it('should share state implicitly to a set of components', () => {
    cy.mount(<App />)
    cy.contains('off')

    cy.get('.toggle-btn').click()
    cy.contains('on')

    cy.get('.toggle-btn').click()
    cy.contains('off')
  })
})
