import React from 'react'
import { OktaLoginForm } from './okta'

describe('OktaLoginForm', () => {
  it('render login form and click to redirect', () => {
    // window.location is locked down for security reasons.
    // During the test, we can use the cy.intercept command to modify the application code.
    //  For example, it could call window.__location.assign instead.
    //  Our test would create this dummy window.__location object before the component mounts
    // cy.on('window:before:load', (win) => {
    //   win.__location = {
    //     assign: cy.stub().as('assign')
    //   }
    // })

    // cy.intercept('GET', '*', (req) => {
    //   req.continue((res) => {
    //     res.body = res.body.replaceAll('window.location.assign', 'window.__location.assign')
    //   })
    // }).as('stubAssign')
    cy.mount(<OktaLoginForm />)

    // cy.getByCy('login-button').click()
  })
})
