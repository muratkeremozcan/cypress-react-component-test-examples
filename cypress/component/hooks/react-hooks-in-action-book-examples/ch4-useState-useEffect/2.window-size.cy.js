import WindowSize from './2.window-size'

describe('trigger a window resize event, when using cy.viewport()', () => {
  let resizeEventFired

  beforeEach(() => {
    cy.mount(<WindowSize />)
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

  it('should trigger a resize event after a window size change', () => {
    cy.viewport(300, 500)
    cy.wrap().should(() => expect(resizeEventFired).to.eq(true))

    cy.viewport(300, 600)
    cy.wrap().should(() => expect(resizeEventFired).to.eq(true))
  })
})
