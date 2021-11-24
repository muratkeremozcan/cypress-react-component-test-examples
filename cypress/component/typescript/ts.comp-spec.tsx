import React from 'react'
import { mount } from '@cypress/react'

const Button = ({ children, ...rest }) => <button {...rest}>{children}</button>

describe('Component spec in typescript', () => {
  it('works', () => {
    mount(
      <Button prop1="1" prop2="2" propTrue>
        Button Label
      </Button>
    )
    cy.contains('button', 'Button Label').should('be.visible')
  })
})
