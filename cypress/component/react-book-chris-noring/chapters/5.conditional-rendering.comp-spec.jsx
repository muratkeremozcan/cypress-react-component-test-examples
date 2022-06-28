/* eslint-disable react/jsx-no-comment-textnodes */
/// <reference types="cypress" />
import React from 'react'

import PropTypes from 'prop-types'

describe('https://softchris.github.io/books/react/conditional/', () => {
  it('conditional rendering with && (base example from 2.state.comp-spec.jsx)  ', () => {
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

      render() {
        const { show } = this.state
        return (
          <>
            <button onClick={this.toggleShow}>Toggle</button>
            {show && <span>show text..</span>}
          </>
        )
      }
    }

    cy.mount(<Element show={false} />)
    cy.get('span').should('not.exist')
    cy.get('button').click()
    cy.get('span').should('contain', 'show text..')
  })

  it('conditional rendering with ternary operator', () => {
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

      render() {
        const { show } = this.state
        return (
          <>
            <button onClick={this.toggleShow}>Toggle</button>
            {show ? <span>show text..</span> : <span>loading..</span>}
          </>
        )
      }
    }

    cy.mount(<Element show={false} />)
    cy.contains('span', 'loading..')
    cy.get('button').click()
    cy.get('span').should('contain', 'show text..')
  })

  it('conditional rendering with if else ', () => {
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

      // cannot use if else on the template directly, so we need a method
      getData = () => {
        if (this.state.show) {
          return <span>show text..</span>
        }
        return <span>loading..</span>
      }

      render() {
        return (
          <>
            <button onClick={this.toggleShow}>Toggle</button>
            <br></br>
            {this.getData()}
          </>
        )
      }
    }

    cy.mount(<Element show={false} />)
    cy.contains('span', 'loading..')
    cy.get('button').click()
    cy.get('span').should('contain', 'show text..')
  })
})
