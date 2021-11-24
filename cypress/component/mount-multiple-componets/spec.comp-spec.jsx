/// <reference types="cypress" />
import React from 'react'
import { mount } from '@cypress/react'

describe('mounting a div', () => {
  it('mounts a div', () => {
    mount(<div className="example">Works</div>)
    cy.contains('.example', 'Works')
  })

  const Button = () => <button>Hello</button>

  it('mount multiple components', () => {
    mount(
      <div>
        <Button />
        <hr />
        <Button />
      </div>
    )
    cy.get('button').should('have.length', 2)
  })
})
