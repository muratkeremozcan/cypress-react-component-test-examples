import AsyncComponent from './AsyncComponent'

it('useAsyncComponent', () => {
  cy.clock()
  cy.mount(<AsyncComponent />)
  cy.contains('Loading: true')

  cy.tick(1000)
  cy.contains('Loading: false')
})
