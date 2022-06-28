/// <reference types="cypress" />
import React from 'react'

it('should properly handle swapping components with rerender', () => {
  const Component1 = ({ input }) => <div>{input}</div>
  const Component2 = ({ differentProp }) => (
    <div style={{ backgroundColor: 'blue' }}>{differentProp}</div>
  )

  cy.mount(<Component1 input="0" />).then(({ rerender }) => {
    rerender(<Component2 differentProp="1" />)
      .get('body')
      .should('contain', '1')
      .find('div')
      .last()
      .should('have.css', 'background-color', 'rgb(0, 0, 255)')
  })
})
