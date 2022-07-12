import RenderCountComponent from './RenderCountComponent'

it('useRenderCount', () => {
  cy.mount(<RenderCountComponent />)

  cy.get('button').click()
  cy.contains('true')
  cy.contains('2')

  cy.get('button').click()
  cy.contains('false')
  cy.contains('3')
})
