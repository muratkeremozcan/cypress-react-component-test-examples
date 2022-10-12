import { useState, useEffect, useMemo } from 'react'

function Form() {
  const [age, setAge] = useState(0)
  const [name, setName] = useState('')
  const [darkMode, setDarkMode] = useState(false)

  // mistake: referential equality: the 2 person objects are never equal, so the component will re-render on every change
  // fix: utilize useMemo to memoize the person object (keep it around, and only update when name or age changes)
  // const person = { age, name } // (toggle)
  const person = useMemo(() => ({ age, name }), [age, name]) // (toggle)

  useEffect(() => console.log(person), [person])

  return (
    <div style={{ background: darkMode ? '#333' : '#FFF' }}>
      Age:{' '}
      <input
        data-cy="age"
        value={age}
        type="number"
        onChange={(e) => setAge(parseInt(e.target.value))}
      />
      <br />
      Name: <input data-cy="name" value={name} onChange={(e) => setName(e.target.value)} />
      <br />
      Dark Mode:{' '}
      <input
        data-cy="dark-mode"
        type="checkbox"
        checked={darkMode}
        onChange={(e) => setDarkMode(e.target.checked)}
      />
    </div>
  )
}

it('should not log out anything when dark mode is toggled', () => {
  cy.spy(console, 'log').as('consoleLog')
  const age = 7
  const name = 'a'
  const person = { age, name }

  cy.mount(<Form />)

  cy.getByCy('age').type(String(age))
  cy.getByCy('name').type(name)
  cy.get('@consoleLog').should('be.calledWith', person).invoke('resetHistory')

  cy.getByCy('dark-mode').click()
  cy.get('@consoleLog').should('not.be.called')
})
