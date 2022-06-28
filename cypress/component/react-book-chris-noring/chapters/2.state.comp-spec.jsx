/* eslint-disable react/jsx-no-comment-textnodes */
/// <reference types="cypress" />
import React from 'react'

import PropTypes from 'prop-types'

describe('https://softchris.github.io/books/react/state/', () => {
  it('changes state with setState using object', () => {
    class Element extends React.Component {
      static propTypes = {
        name: PropTypes.string
      }

      // declare the state in the constructor
      constructor(props) {
        super(props)
        this.state = {
          name: this.props.name
        }
      }

      changeName() {
        return this.setState({
          name: 'new name'
        })
      }

      render() {
        // access state with this.state.property
        return (
          <>
            <div>{this.state.name}</div>
            <button onClick={() => this.changeName()}>Change name</button>
          </>
        )
      }
    }

    cy.mount(<Element name={'yoda'} />)
    cy.contains('div', 'yoda')
    cy.get('button').click()
    cy.contains('div', 'new name')
  })

  it('changes state with setState using updater cb function ', () => {
    class Element extends React.Component {
      static propTypes = {
        show: PropTypes.bool
      }

      constructor(props) {
        super(props)
        this.state = {
          show: this.props.show
        }
      }

      toggleShow = () =>
        this.setState((prevState) => ({ show: !prevState.show }))

      // original version: you can pass an updater cb function or object to setState (note: the original gives an async warning)
      // toggleShow = () => {
      //   this.setState({
      //     show: !this.state.show
      //   })
      // }

      render() {
        // in the render method, you can use some destructuring to make it look neater
        const { show } = this.state
        return (
          <>
            <button onClick={this.toggleShow}>Toggle</button>
            {show && <div>show text..</div>}
          </>
        )
      }
    }

    cy.mount(<Element show={true} />)
    cy.contains('div', 'show text..')
    cy.get('button').click()
    cy.get('div').should('not.contain', 'show text..')
  })
})
