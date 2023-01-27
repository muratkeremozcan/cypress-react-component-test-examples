import { LoginBtn } from './login'

describe('should deal with win.location.replace', () => {
  it('render login form and click to redirect', () => {
    // window.location is locked down for security reasons.
    // During the test, we can use the cy.intercept command to modify the application code.
    //  For example, it could call window.__location.assign instead.
    //  Our test would create this dummy window.__location object before the component mounts
    cy.on('window:before:load', (win) => {
      // @ts-expect-error this is a nice hack
      win.__location = {
        assign: cy.stub().as('assign')
      }
    })

    cy.intercept('GET', '*', (req) => {
      req.continue((res) => {
        res.body = res.body.replaceAll('window.location.assign', 'window.__location.assign')
      })
    }).as('stubAssign')
    Cypress.on('uncaught:exception', () => false)
    cy.mount(<LoginBtn />)

    // cy.getByCy('login-button').click()
  })
})
