import { useState } from 'react'
import { useFetch } from './useFetch'

function FetchComponent() {
  const [id, setId] = useState(1)
  const { loading, data, error } = useFetch(`https://jsonplaceholder.typicode.com/todos/${id}`)

  return (
    <div>
      <div>{id}</div>
      <button onClick={() => setId((currentId) => currentId + 1)}>Increment ID</button>
      <div>Loading: {loading.toString()}</div>
      <div>{JSON.stringify(error, null, 2)}</div>
      <div>{JSON.stringify(data, null, 2)}</div>
    </div>
  )
}

it('should', () => {
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
