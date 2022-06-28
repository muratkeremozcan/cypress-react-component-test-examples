/// <reference types="cypress" />
import React, { useState, useEffect } from 'react'

const InputAccumulator = ({ input }) => {
  const [store, setStore] = useState([])

  useEffect(() => setStore((prev) => [...prev, input]), [input])

  return (
    <ul>
      {store.map((v) => (
        <li key={v}>{v} </li>
      ))}
    </ul>
  )
}

it('should rerender preserving input values - hooks useState & useEffect', () => {
  cy.mount(<InputAccumulator input="initial" />).then(({ rerender }) => {
    cy.get('li').eq(0).contains('initial')

    rerender(<InputAccumulator input="Rerendered value" />)
    cy.get('li:nth-child(1)').should('contain', 'initial')
    cy.get('li:nth-child(2)').should('contain', 'Rerendered value')

    rerender(<InputAccumulator input="Second rerendered value" />)

    cy.get('li:nth-child(1)').should('contain', 'initial')
    cy.get('li:nth-child(2)').should('contain', 'Rerendered value')
    cy.get('li:nth-child(3)').should('contain', 'Second rerendered value')
  })
})
