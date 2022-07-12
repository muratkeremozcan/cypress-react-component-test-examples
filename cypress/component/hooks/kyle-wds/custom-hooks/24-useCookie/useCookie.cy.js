import CookieComponent from './CookieComponent'

it('useCookie', () => {
  cy.mount(<CookieComponent />)

  const verifyCookie = (value) => {
    cy.contains(value)
    return cy.getCookie('name').its('value').should('eq', value)
  }

  verifyCookie('John')

  cy.getByCy('change-sally').click()
  verifyCookie('Sally')

  cy.getByCy('delete').click()

  cy.getCookie('name').should('eq', null)
})
