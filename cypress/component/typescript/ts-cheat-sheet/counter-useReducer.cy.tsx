import Counter from './counter'

it('useReducer', () => {
  cy.mount(<Counter />)

  cy.getByCy('+').click().click()
  cy.contains(10)
  cy.getByCy('-').click()
  cy.contains(5)
})
