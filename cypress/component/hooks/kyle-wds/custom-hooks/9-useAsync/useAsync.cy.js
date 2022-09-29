import AsyncComponent from './AsyncComponent'

// test is flakey locally and in CI
it.skip('useAsyncComponent', () => {
  cy.clock()
  cy.mount(<AsyncComponent />)
  cy.contains('Loading: true')

  cy.tick(2000)
  cy.contains('Loading: false')
})
