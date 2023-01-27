import { LoginBtn, Location } from './login'

it('should deal with win.location.replace', () => {
  // how would we do the same workaround in a component test?
  // cypress/e2e/win-location-replace.spec.ts
  // cy.on('window:before:load', win => ...) is not an event in component tests
  // so we stub the Location.assign dummy method

  cy.stub(Location, 'assign').as('assign')

  cy.mount(<LoginBtn />)

  cy.getByCy('login-button').click()
  cy.get('@assign').should('have.been.calledOnceWith', 'https://www.cypress.io')
})
