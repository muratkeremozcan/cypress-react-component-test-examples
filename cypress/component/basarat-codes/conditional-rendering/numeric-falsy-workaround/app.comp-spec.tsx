import App from './App'

it('should render', () => {
  cy.mount(<App />)
  cy.getByCy('add').dblclick().dblclick().click()
  cy.contains('Never gonna tell a lie and hurt you')

  cy.getByCy('remove').dblclick().dblclick().dblclick()
  cy.get('li').should('not.exist')
})
