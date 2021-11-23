/* eslint-disable no-unused-expressions */
/* eslint-disable no-undef */
/// <reference types="cypress" />
import React, { Component } from 'react'
import { mount, unmount } from '@cypress/react'

export default class Comp extends Component {
  componentDidMount() {
    this.props.onMount()
  }

  componentWillUnmount() {
    this.props.onUnmount()
  }

  render() {
    return <div>Component with mount and unmount calls</div>
  }
}

it('calls callbacks on mount and unmount', () => {
  const onMount = cy.stub()
  const onUnmount = cy.stub()

  // mount is an async call
  mount(<Comp onMount={onMount} onUnmount={onUnmount} />)
  cy.then(() => {
    expect(onMount).to.have.been.calledOnce
    expect(onUnmount).to.have.not.been.called
  })

  cy.contains('Component with').should('be.visible')
  unmount().then(() => {
    expect(onUnmount).to.have.been.calledOnce
  })

  cy.contains('Component with').should('not.exist')
})

class Comp2 extends Component {
  componentWillUnmount() {
    // simply calls the prop
    this.props.onUnmount()
  }

  render() {
    return <div>My component</div>
  }
}

describe('Comp2 with componentWillUnmount', () => {
  it('calls the prop', () => {
    mount(<Comp2 onUnmount={cy.stub().as('onUnmount')} />)
    cy.contains('My component')

    // after we have confirmed the component exists let's remove it
    // unmount() command is automatically enqueued
    unmount()

    // the component is gone from the DOM
    cy.contains('My component').should('not.exist')
    // the component has called the prop on unmount
    cy.get('@onUnmount').should('have.been.calledOnce')
  })
})
