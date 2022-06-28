import React from 'react'

const Login = () => (
  <div>
    <div>Login by clicking below</div>
    <a href="/foo">click me</a>
  </div>
)

describe('full navigation', () => {
  it('should not happen', () => {
    cy.mount(<Login />)

    const clicked = cy.stub()

    cy.get('a').invoke('on', 'click', (e) => e.preventDefault() || clicked())
    cy.get('a').click()
    cy.wrap(clicked).should('have.been.calledOnce')
  })
})
