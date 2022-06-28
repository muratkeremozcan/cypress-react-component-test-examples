/// <reference types="cypress" />
import React from 'react'

export class Component extends React.Component {
  constructor(props) {
    super(props)

    // gives component access to the window
    window.component = this
  }

  render() {
    return <p>component</p>
  }
}

it('has the same window from the component as from test', () => {
  cy.mount(<Component />)
  cy.contains('component')
  cy.window()
    .its('location.pathname')
    .should('match', /window.comp-spec\.jsx/)

  // the window should have property set by the component
  cy.window().should('have.property', 'component')
})
