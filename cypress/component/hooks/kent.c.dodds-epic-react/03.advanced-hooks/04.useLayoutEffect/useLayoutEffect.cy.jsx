import App from './useLayoutEffect'

describe('useLayoutEffect', () => {
  it('should work scroll and add the element together, not with a delay', () => {
    cy.mount(<App />)

    cy.getByCy('quote-7').should('be.visible')
    cy.getByCy('quote-8').should('not.exist')

    cy.getByCy('add-message').click().dblclick()
    cy.getByCy('quote-9').should('be.visible')

    cy.getByCy('remove-message').click()
    cy.getByCy('quote-9').should('not.exist')
    cy.getByCy('quote-8').should('be.visible')
  })
})
