it('should deal with win.location.replace', () => {
  // https://glebbahmutov.com/blog/cypress-tips-and-tricks/#deal-with-windowlocationreplace
  cy.on('window:before:load', (win) => {
    // @ts-ignore
    win.__location = {
      assign: cy.stub().as('assign')
    }
  })

  cy.intercept('GET', 'index.html', (req) => {
    req.continue((res) => {
      res.body = res.body.replaceAll('window.location.assign', 'window.__location.assign')
    })
  }).as('index')

  cy.visit('index.html')
  cy.wait('@index')
  cy.contains('h1', 'First page')
  cy.get('@assign').should('have.been.calledOnceWith', 'https://www.cypress.io')
})
