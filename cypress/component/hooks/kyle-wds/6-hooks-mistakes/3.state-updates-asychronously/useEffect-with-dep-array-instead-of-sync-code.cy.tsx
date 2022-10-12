import { useState, useEffect } from 'react'
import { partial } from 'ramda'

function Counter() {
  const [count, setCount] = useState(0)

  // mistake: state updates asynchronously
  // if you need an effect to run asynchronously,
  // instead of putting code after the state setters, utilize useEffect with a dependency array

  useEffect(() => console.log(count), [count]) // (toggle)

  const adjustCount = (amount: number) => {
    setCount((currentCount) => currentCount + amount)
    setCount((currentCount) => currentCount + amount)
    // console.log(count) // won't be updated yet (toggle)
  }

  return (
    <>
      <button data-cy="-" onClick={partial(adjustCount, [-1])}>
        -
      </button>
      {count}
      <button data-cy="+" onClick={partial(adjustCount, [1])}>
        +
      </button>
    </>
  )
}

it('use useState with dependency array instead of synchronous code after state setters', () => {
  cy.spy(console, 'log').as('consoleLog')
  cy.mount(<Counter />)

  cy.contains('0')
  cy.get('@consoleLog').should('have.been.calledWith', 0).invoke('resetHistory') // fails with console.log in adjustCount

  cy.getByCy('+').click()
  cy.contains('2')
  cy.get('@consoleLog').should('have.been.calledWith', 2).invoke('resetHistory') // fails with console.log in adjustCount

  cy.getByCy('-').click()
  cy.contains('0')
  cy.get('@consoleLog').should('have.been.calledWith', 0) // fails with console.log in adjustCount
})
