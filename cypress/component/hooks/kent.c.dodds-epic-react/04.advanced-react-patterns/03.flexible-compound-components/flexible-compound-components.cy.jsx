import App from './flexible-compound-components'

describe('compound components', () => {
  it('should share state implicitly to a set of components including grandchildren', () => {
    cy.mount(<App />)
    cy.contains('off')

    cy.get('.toggle-btn').click()
    cy.contains('on')

    cy.get('.toggle-btn').click()
    cy.contains('off')
  })
})
