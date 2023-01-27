it('should deal with win.location.replace', () => {
  // https://glebbahmutov.com/blog/cypress-tips-and-tricks/#deal-with-windowlocationreplace
  // window.location is locked down for security reasons.
  // During the test, we can use the cy.intercept command to modify the application code.
  //  For example, it could call window.__location.assign instead.
  //  Our test would create this dummy window.__location object before the component mounts

  cy.on('window:before:load', (win) => {
    // @ts-ignore
    win.__location = {
      assign: cy.stub().as('assign')
    }
  })

  cy.intercept('GET', 'index.html', (req) => {
    req.reply((res) => {
      res.body = res.body.replaceAll('window.location.assign', 'window.__location.assign')
    })
  }).as('index')

  cy.visit('index.html')
  cy.wait('@index')
  cy.contains('h1', 'First page')
  cy.get('@assign').should('have.been.calledOnceWith', 'https://www.cypress.io')
})
