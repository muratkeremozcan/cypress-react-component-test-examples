import { LoginBtn } from './login'

it('should deal with win.location.replace', () => {
  // how would we do the same workaround in a component test?
  // cypress/e2e/win-location-replace.spec.ts

  cy.on('window:before:load', (win) => {
    // @ts-ignore
    win.__location = {
      assign: cy.stub().as('assign')
    }
  })

  cy.intercept('GET', 'https://www.cypress.io', (req) => {
    req.continue((res) => {
      res.body = res.body.replaceAll('window.location.assign', 'window.__location.assign')
    })
  }).as('index')

  cy.mount(<LoginBtn />)

  cy.getByCy('login-button')
  // .click()
  // cy.wait('@index')
  // cy.get('@assign').should('have.been.calledOnceWith', 'https://www.cypress.io')
})
