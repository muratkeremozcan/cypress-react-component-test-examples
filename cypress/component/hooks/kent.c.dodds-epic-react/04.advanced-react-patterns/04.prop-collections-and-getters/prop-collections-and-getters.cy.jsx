import App from './prop-collections-and-getters'

describe('prop-collections-and-getters', () => {
  it('should make it easy for consumer to use the custom hook', () => {
    cy.mount(<App />)
    cy.contains('off')

    cy.get('.toggle-btn').click()
    cy.contains('on')

    cy.get('.toggle-btn').click()
    cy.contains('off')

    cy.get('#custom-button-id').click()
    cy.contains('on')

    cy.get('#custom-button-id').click()
    cy.contains('off')
  })
})
