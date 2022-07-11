import FetchComponent from './FetchComponent'

it('useFetch', () => {
  cy.intercept('https://jsonplaceholder.typicode.com/todos/*', {
    userId: 1,
    id: 2,
    title: 'quis ut nam facilis et officia qui',
    completed: true
  }).as('fetch')
  cy.mount(<FetchComponent />)
  cy.get('div').contains('1')
  cy.get('button').click()
  cy.get('div').contains('2')
  cy.wait('@fetch')
  cy.get('div').contains('Loading: false')
})
