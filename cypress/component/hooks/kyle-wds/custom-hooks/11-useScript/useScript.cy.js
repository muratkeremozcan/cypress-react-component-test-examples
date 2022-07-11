import ScriptComponent from './ScriptComponent'

it('useScript', () => {
  cy.viewport(300, 600)
  cy.mount(<ScriptComponent />)

  cy.contains('300')
})
