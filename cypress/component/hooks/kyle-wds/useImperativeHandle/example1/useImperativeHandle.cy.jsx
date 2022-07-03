import App from './useImperativeHandle'

describe('useImperativeHandle', () => {
  it('should focus on the ', () => {
    cy.mount(<App />)
    cy.getByCy('open').click()
    cy.get('.modal-header').should('be.visible')

    cy.getByCy('focus-close').click()
    cy.get('.close-btn').should('be.focused')

    cy.getByCy('focus-confirm').click()
    cy.get('.confirm-btn').should('be.focused')

    cy.getByCy('focus-deny').click()
    cy.get('.deny-btn').should('be.focused')

    cy.get('.close-btn').click()
    cy.get('.modal-header').should('not.exist')
  })
})
