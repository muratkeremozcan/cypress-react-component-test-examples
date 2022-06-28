/// <reference types="cypress" />

import React from 'react'

const Button = React.forwardRef(({ children, ...rest }, ref) => (
  <button {...rest} ref={ref}>
    {children}
  </button>
))

/* eslint-env mocha */
describe('Button component', function () {
  it('works', function () {
    cy.mount(<Button>Hello, World</Button>)
    cy.contains('Hello, World')
  })

  it('forwards refs as expected', function () {
    const ref = React.createRef()

    cy.mount(
      <Button className="testing" ref={ref}>
        Hello, World
      </Button>
    )

    expect(ref).to.have.property('current')
  })
})
