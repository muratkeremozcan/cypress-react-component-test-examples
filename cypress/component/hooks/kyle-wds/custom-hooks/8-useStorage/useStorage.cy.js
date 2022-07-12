import StorageComponent from './StorageComponent'

it('useStorage', () => {
  cy.mount(<StorageComponent />)

  cy.clearLocalStorage()
  cy.contains('Set Name').click()
  cy.contains('Set Age').click()
  cy.contains('John - 40')

  cy.contains('Remove Name').click()
  cy.contains('Remove Age').click()
  cy.contains('div', ' - ')
})
