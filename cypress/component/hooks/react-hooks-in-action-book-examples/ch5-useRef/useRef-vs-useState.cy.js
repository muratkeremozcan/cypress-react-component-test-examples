// [5.0] useState vs useRef
// useState: calling the updater function triggers a re-render.
// useRef: can update a value without a corresponding change to the UI.

import { useRef, useState } from 'react'

function Counter() {
  const [count, setCount] = useState(1)
  // [5.1] useRef returns an object with a current property
  // initially the arg passed to useRef is assigned to ref.current
  // you can persist state values by assigning values to ref.current
  // [5.2] assigning new values to the current properties of the ref objects doesn’t trigger a re-render.
  // but as React always returns the same ref objects, the new values are available when the component runs again
  const ref = useRef(1)

  const incCount = () => setCount((c) => c + 1)
  const incRef = () => ref.current++

  return (
    <div>
      <button onClick={incCount} data-cy="count">
        count: {count}
      </button>
      <hr />
      <button onClick={incRef} data-cy="ref-current">
        ref.current: {ref.current}
      </button>
    </div>
  )
}

it('useRef vs useState', () => {
  cy.mount(<Counter />)

  cy.getByCy('count').contains('1')
  cy.getByCyLike('ref').contains('1')

  cy.log('useRef does not update on the UI, while useStateDoes')
  cy.getByCy('count').dblclick().dblclick()
  cy.getByCyLike('ref').dblclick().dblclick()
  cy.getByCy('count').contains('5')
  cy.getByCyLike('ref').contains('1')

  cy.log(
    'only after the re-render because of useState, useRef new value is displayed'
  )
  cy.getByCy('count').click().contains('6')
  cy.getByCyLike('ref').contains('5')
})
