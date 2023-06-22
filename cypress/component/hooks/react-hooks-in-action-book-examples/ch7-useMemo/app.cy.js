import App from './App'

describe('App', { viewportWidth: 900, viewportHeight: 700 }, () => {
  beforeEach(() => {
    cy.mount(<App />)

    cy.getByCy('input').clear().type('abcc')
  })
  it('should check initial anagram data', () => {
    cy.getByCy('anagram-data').contains('24')
  })

  it('should exercise distinct toggle', () => {
    cy.getByCy('distinct').click()
    cy.getByCy('anagram-data').contains('12')

    cy.getByCy('distinct').click()
    cy.getByCy('anagram-data').contains('24')
  })

  it('should exercise show toggle', () => {
    cy.getByCy('anagrams').should('not.exist')

    cy.getByCy('show').click()
    cy.getByCy('anagrams').should('be.visible')
    cy.getByCy('anagrams').children().should('have.length', 12)

    cy.getByCy('show').click()
    cy.getByCy('anagrams').should('not.exist')
  })

  it('should reset input to default text when reset button is clicked', () => {
    cy.getByCy('reset').click()
    cy.getByCy('anagram-data').contains('6')

    cy.getByCy('default-text').clear().type('ab')
    cy.getByCy('reset').click()
    cy.getByCy('anagram-data').contains('2')
  })
})
