// www.youtube.com/watch?v=0ZJgIjIuY7U

import App from './2.useEffect-example'

describe('useEffect', () => {
  let resizeEventFired

  beforeEach(() => {
    cy.mount(<App />)
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
    cy.viewport(400, 500)
    cy.wrap().should(() => expect(resizeEventFired).to.eq(true))

    cy.viewport(500, 500)
    cy.wrap().should(() => expect(resizeEventFired).to.eq(true))
  })
})
