import { useState, useRef, FormEvent, ChangeEvent } from 'react'
import { partial } from 'lodash'

function Counter() {
  const [count, setCount] = useState(0)

  // mistake: not using the useState function version
  // when there are multiple setStates in a row, React batches them together
  // and it will only update once

  // const adjustCount = (amount: number) => { // (toggle)
  //   setCount(count + amount)
  //   setCount(count + amount)
  // }

  // with the useState function version, we can pass in a function that will receive the previous state
  // and if there are multiple setStates in a row, we will get an update for each one
  const adjustCount = (amount: number) => {
    // (toggle)
    setCount((currentCount) => currentCount + amount)
    setCount((currentCount) => currentCount + amount)
  }

  return (
    <>
      <button data-cy="-" onClick={partial(adjustCount, -1)}>
        {/* <button data-cy="-" onClick={() => adjustCount(-1)}> */}-
      </button>
      {count}
      <button data-cy="+" onClick={partial(adjustCount, 1)}>
        {/* <button data-cy="-" onClick={() => adjustCount(1)}></button> */}+
      </button>
    </>
  )
}

it('use useState function version if you have multiple setStates in a row', () => {
  cy.mount(<Counter />)

  cy.contains('0')
  cy.getByCy('+').click()
  cy.contains('2')
  cy.getByCy('-').click()
  cy.contains('0')
})
