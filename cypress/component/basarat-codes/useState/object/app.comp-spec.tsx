import { useState } from 'react'

describe('App', () => {
  it('useState with objects', () => {
    function App() {
      const [name, setName] = useState({ first: '', last: '' })

      const handleFirstName = (e) =>
        setName((n) => ({ ...n, first: e.target.value }))

      const handleLastName = (e) =>
        setName((n) => ({ ...n, last: e.target.value }))

      return (
        <div>
          <input
            data-cy="first"
            value={name.first}
            onChange={handleFirstName}
          />
          <input data-cy="last" value={name.last} onChange={handleLastName} />
          <div data-cy="full">
            {name.first} {name.last}
          </div>
        </div>
      )
    }

    cy.mount(<App />)

    const first = 'Murat'
    const last = 'Ozcan'

    cy.getByCy('first').type(first)
    cy.getByCy('last').type(last)
    cy.getByCy('full').contains(`${first} ${last}`)
  })

  it('if the states do not depend on each other, use separate hooks', () => {
    function App() {
      const [firstName, setFirstName] = useState('')
      const [lastName, setLastName] = useState<string>('')

      const handleFirstName = (e) => setFirstName(e.target.value)

      const handleLastName = (e) => setLastName(e.target.value)

      return (
        <div>
          <input data-cy="first" value={firstName} onChange={handleFirstName} />
          <input data-cy="last" value={lastName} onChange={handleLastName} />
          <div data-cy="full">
            {firstName} {lastName}
          </div>
        </div>
      )
    }

    cy.mount(<App />)

    const first = 'Murat'
    const last = 'Ozcan'

    cy.getByCy('first').type(first)
    cy.getByCy('last').type(last)
    cy.getByCy('full').contains(`${first} ${last}`)
  })
})
