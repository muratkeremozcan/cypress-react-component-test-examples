/// <reference types="cypress" />

import React from 'react'
import { mount } from '@cypress/react'

const Button = React.forwardRef(({ children, ...rest }, ref) => (
  <button {...rest} ref={ref}>
    {children}
  </button>
))

/* eslint-env mocha */
describe('Button component', function () {
  it('works', function () {
    mount(<Button>Hello, World</Button>)
    cy.contains('Hello, World')
  })

  it('forwards refs as expected', function () {
    const ref = React.createRef()

    mount(
      <Button className="testing" ref={ref}>
        Hello, World
      </Button>
    )

    expect(ref).to.have.property('current')
  })
})
