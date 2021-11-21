/* eslint-disable no-undef */
/// <reference types="cypress" />
import React from 'react'
import { mount } from '@cypress/react'

describe('Jsx', () => {
  const Elem = () => <div>Some title</div>

  it('has title attribute', () => {
    mount(<Elem title="a title" />)
    cy.contains('Some title')

    mount(
      <Elem title="a title">can close like this too it it has children</Elem>
    )
    cy.contains('Some title')
  })

  it('calls React.createElement with props and text', () => {
    cy.spy(React, 'createElement').as('reactStub')

    mount(<Elem title="a title"></Elem>)

    cy.get('@reactStub').should('have.been.called')
  })

  it('renders fragments', () => {
    const ElemFragment = () => (
      <React.Fragment>
        <h1>Some title</h1>
        <div>Som content</div>
      </React.Fragment>
    )

    mount(<ElemFragment />)
    cy.contains('h1', 'Some title')
    cy.contains('div', 'Som content')
  })
})

describe('Component', () => {
  class Jedi extends React.Component {
    render() {
      return <div>I am a Jedi Component</div>
    }
  }

  class Application extends React.Component {
    render() {
      return (
        <div>
          <Jedi />
        </div>
      )
    }
  }

  it('renders Application and child component', () => {
    mount(<Application />)
    cy.contains('I am a Jedi Component')
  })
})
