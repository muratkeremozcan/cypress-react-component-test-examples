import React, { useState, useEffect } from 'react'

function App() {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')

  // mistake: useState is not always needed
  // here useState is causing a rerender, resulting in 2 renders when firstName or lastName change
  // const [fullName, setFullName] = useState('') // toggle to see double the renders
  // useEffect(() => setFullName(`${firstName} ${lastName}`), [firstName, lastName]) // toggle to see double the renders

  // we can instead instead derive state what we already have, without an additional setter
  const fullName = `${firstName} ${lastName}` // use a variable instead of state // (toggle)

  console.log('render')

  return (
    <>
      <input data-cy="first" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
      <input data-cy="last" value={lastName} onChange={(e) => setLastName(e.target.value)} />
      {fullName}
    </>
  )
}

it('use ', () => {
  cy.spy(console, 'log').as('consoleLog')
  cy.spy(React, 'useState').as('useState')

  const first = 'a'
  const last = 'b'

  cy.mount(<App />)
  cy.get('@consoleLog').should('have.been.calledOnceWith', 'render')
  cy.get('@useState').should('have.been.called').its('callCount').should('eq', 2)

  cy.getByCy('first').type(first)
  cy.get('@consoleLog').should('have.been.calledWith', 'render').its('callCount').should('eq', 2)
  cy.get('@useState').its('callCount').should('eq', 4)

  cy.getByCy('last').type(last)
  cy.get('@consoleLog').should('have.been.calledWith', 'render').its('callCount').should('eq', 3)
  cy.get('@useState').its('callCount').should('eq', 6)

  cy.contains(`${first} ${last}`)
})
