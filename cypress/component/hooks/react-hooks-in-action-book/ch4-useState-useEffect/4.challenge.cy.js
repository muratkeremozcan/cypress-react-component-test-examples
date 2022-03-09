import { mount } from '@cypress/react'
import Challenge from './4.challenge'

describe('Challenge', () => {
  let resizeEventFired

  beforeEach(() => {
    mount(<Challenge />)
    resizeEventFired = false

    // if resize fires at any point, we set the variable to true
    // must happen after mount, or it gets flakey
    cy.window().then((win) =>
      win.addEventListener('resize', () => (resizeEventFired = true))
    )
  })

  it('should not trigger a resize event without window size change', () => {
    cy.wrap().should(() => expect(resizeEventFired).to.eq(false))
  })

  it('should be medium by default', () => {
    cy.document().its('title').should('eq', 'medium')
    cy.contains('medium').contains('500')
  })

  it('should be small under 400 width', () => {
    cy.viewport(399, 500)

    cy.wrap().should(() => expect(resizeEventFired).to.eq(true))
    cy.document().its('title').should('eq', 'small')
    // there is 1 pixel deviation here
    cy.contains('small').contains('39')
  })

  it('should be medium at 400 width', () => {
    cy.viewport(400, 500)

    cy.wrap().should(() => expect(resizeEventFired).to.eq(true))
    cy.document().its('title').should('eq', 'medium')
    cy.contains('medium').contains('400')
  })

  it('should be medium at 800 width', () => {
    cy.viewport(800, 500)

    cy.wrap().should(() => expect(resizeEventFired).to.eq(true))
    cy.document().its('title').should('eq', 'medium')
    cy.contains('medium').contains('800')
  })

  it('should be large over 800 width', () => {
    cy.viewport(801, 500)
    cy.wrap().should(() => expect(resizeEventFired).to.eq(true))
    cy.document().its('title').should('eq', 'large')
    cy.contains('large').contains('801')
  })
})
