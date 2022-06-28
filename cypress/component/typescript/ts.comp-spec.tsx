import React from 'react'

const Button = ({ children, ...rest }) => <button {...rest}>{children}</button>

describe('Component spec in typescript', () => {
  it('works', () => {
    cy.mount(
      <Button prop1="1" prop2="2" propTrue>
        Button Label
      </Button>
    )
    cy.contains('button', 'Button Label').should('be.visible')
  })
})
