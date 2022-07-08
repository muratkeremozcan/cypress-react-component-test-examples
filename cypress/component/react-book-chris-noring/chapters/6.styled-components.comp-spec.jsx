// https://styled-components.com/docs/basics
// also look at cypress/component/styled-components&-theme-provider

/* eslint-disable react/jsx-no-comment-textnodes */
/// <reference types="cypress" />
import React from 'react'

import PropTypes from 'prop-types'
import styled, { css, ThemeProvider } from 'styled-components'

describe('https://softchris.github.io/books/react/styledcomponents/', () => {
  describe('styled components', () => {
    it('style.<htmlTag>`...the css...` ', () => {
      const Button = styled.button`
        background: black;
        color: white;
        border-radius: 7px;
        padding: 20px;
        margin: 10px;
        font-size: 16px;
        // we are able to use normal CSS properties in combination with pseudo selectors like :disabled and :hover
        :disabled {
          opacity: 0.4;
        }
        :hover {
          box-shadow: 0 0 10px yellow;
        }
      `

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
              <Button>
                <button onClick={this.toggleShow} data-cy="button">
                  Toggle
                </button>
              </Button>
              {show && <span>show text..</span>}
            </>
          )
        }
      }

      cy.mount(<Element show={false} />)
      cy.get('span').should('not.exist')
      cy.getByCy('button').should('not.have.css', 'box-shadow', '')
      cy.getByCy('button')
        .realHover()
        .then(($btn) => {
          cy.wrap($btn).should('have.css', 'box-shadow')
          cy.wrap($btn).click()
          cy.get('span').should('contain', 'show text..')
        })
        .and('have.css', 'border-radius')
    })

    // eslint-disable-next-line no-template-curly-in-string
    it('can use conditional logic with props & styles: ${props => props.<attributeName> && css`..the css..`} ', () => {
      // we ca use the ${} to signal that we are running some conditional logic and based on the existence of an attribute/property
      const Button = styled.button`
        background: black;
        color: white;
        padding: 20px;
        margin: 10px;
        font-size: 16px;
        :disabled {
          opacity: 0.4;
        }
        :hover {
          box-shadow: 0 0 10px yellow;
        }
        ${(props) =>
          props.primary &&
          css`
            background-color: green;
            color: purple;
          `}
        // we can set different values on a property depending on whether an attribute exist
      border-radius: ${(props) => (props.primary ? '50%' : '10px')};
      `

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
              <Button primary data-cy="button">
                <button onClick={this.toggleShow}>Toggle</button>
              </Button>
              {show && <span>show text..</span>}
            </>
          )
        }
      }

      cy.mount(<Element show={false} />)
      cy.get('span').should('not.exist')
      cy.getByCy('button')
        .should('have.css', 'background-color', 'rgb(0, 128, 0)')
        .and('have.css', 'color', 'rgb(128, 0, 128)')
        .and('have.css', 'border-radius', '50%')
        .click()
      cy.get('span').should('contain', 'show text..')
    })

    it('can use ThemeProvider: props.theme.<nameOfThemeProperty>', () => {
      // can access the themes property by writing props.theme.<nameOfThemeProperty>
      const Button = styled.button.attrs({ title: 'titled' })`
        background: ${(props) => props.theme.bgcolor};
        color: ${(props) => props.theme.color};
        border-radius: 7px;
        padding: 20px;
        margin: 10px;
        font-size: 16px;
        :disabled {
          opacity: 0.4;
        }
        :hover {
          box-shadow: 0 0 10px yellow;
        }
        ${(props) =>
          props.primary &&
          css`
            background: green;
            color: white;
          `}
        border-radius: ${(props) => (props.round ? '50%' : '7px')}
      `

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
            <ThemeProvider theme={{ color: 'white', bgcolor: 'red' }}>
              <Button data-cy="button">
                <button onClick={this.toggleShow}>Toggle</button>
              </Button>
              {show && <span>show text..</span>}
            </ThemeProvider>
          )
        }
      }

      cy.mount(<Element show={false} />)
      cy.getByCy('button')
        .should('have.css', 'background-color', 'rgb(255, 0, 0)')
        .and('have.css', 'color', 'rgb(255, 255, 255)')
        .and('have.css', 'border-radius', '7px')
        .click()
      cy.get('span').should('contain', 'show text..')
    })
  })

  describe('styling an existing component & inheritence', () => {
    // in the component use className as a property and assign it to an element
    const Text = ({ text, className }) => (
      <div className={className} data-cy="nice-text">
        {' '}
        Here is the text: {text}
      </div>
    )
    Text.propTypes = {
      text: PropTypes.string,
      className: PropTypes.any
    }
    // call styled as a function function with the component passed in as the argument
    const DecoratedText = styled(Text)`
      background: black;
      color: red;
    `
    // extend the style https://styled-components.com/docs/basics
    const GiantText = styled(DecoratedText)`
      font-size: 48px;
    `

    // attach additional props to a component
    const FramedText = styled(Text).attrs({ title: `framed` })`
      border: solid 2px black;
      color: blue;
      font-size: 16px;
      padding: 30px;
    `

    it('use styled as a function: styled(TheComponent)', () => {
      cy.mount(<DecoratedText text={'I am decorated'} />)
      cy.getByCyLike('nice')
        .should('have.css', 'background-color', 'rgb(0, 0, 0)')
        .and('have.css', 'color', 'rgb(255, 0, 0)')
    })

    it('can use inheritence', () => {
      cy.mount(<GiantText text={'I am decorated'} />)
      cy.getByCyLike('nice')
        .should('have.css', 'background-color', 'rgb(0, 0, 0)')
        .and('have.css', 'color', 'rgb(255, 0, 0)')
    })

    it('can attach additional props to a component with attrs() ', () => {
      cy.mount(<FramedText text={'I am decorated'} />)
      cy.getByCyLike('nice').should('have.prop', 'title')
    })
  })
})
