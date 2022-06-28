/// <reference types="cypress" />
import React from 'react'

import PropTypes from 'prop-types'

describe('https://softchris.github.io/books/react/methods/', () => {
  it('binding a method to class: first', () => {
    class Element extends React.Component {
      constructor() {
        super()
        this.state = { str: 'initial' }
        // bind a method to class to use it
        this.clicked = this.clicked.bind(this)
      }

      clicked() {
        return this.setState({ str: 'clicked' })
      }

      // note: when setting state, we are calling a function that returns a function invocation: onClick={() => this.clicked()}
      // {this.clicked} is the point free version of that
      render() {
        return <button onClick={this.clicked}>{this.state.str}</button>
      }
    }

    cy.mount(<Element />)
    cy.get('button').contains('initial').click()
    cy.contains('button', 'clicked')
  })

  it('using a lambda function; no need to bind the method', () => {
    class Element extends React.Component {
      constructor() {
        super()
        this.state = { str: 'initial' }
        // this.clicked = this.clicked.bind(this)
      }
      // KEY: if using a lambda function, no need to bind the method
      clicked = () => {
        return this.setState({ str: 'clicked' })
      }

      render() {
        return <button onClick={this.clicked}>{this.state.str}</button>
      }
    }

    cy.mount(<Element />)
    cy.get('button').contains('initial').click()
    cy.contains('button', 'clicked')
  })

  it('the onChange event', () => {
    class Element extends React.Component {
      constructor() {
        super()
        this.state = { str: 'initial' }
      }

      clicked = () => {
        this.setState({ str: 'clicked' })
      }

      changed = (evt) => {
        this.setState({
          str: evt.target.value
        })
      }

      render() {
        return (
          <>
            <input onChange={this.changed} placeholder="placeholder value" />
            <button onClick={this.clicked}>{this.state.str}</button>
          </>
        )
      }
    }

    cy.mount(<Element />)
    cy.get('input').type('reflection')
    cy.contains('button', 'reflection').click()
    cy.contains('button', 'clicked')
  })
})
