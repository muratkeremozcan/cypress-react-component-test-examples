/// <reference types="cypress" />
import React from 'react'

import PropTypes from 'prop-types'

describe('https://softchris.github.io/books/react/props/', () => {
  const yodaData = {
    name: 'Yoda',
    age: 300
  }

  const characters = [
    { ...yodaData },
    {
      name: 'Obi-Wan Kenobi',
      age: 30
    }
  ]

  class Jedi extends React.Component {
    // best practice to use propTypes, and make it a member of the class
    static propTypes = {
      jedi: PropTypes.shape({
        name: PropTypes.string.isRequired,
        age: PropTypes.number.isRequired,
        key: PropTypes.number
      })
    }
    render() {
      return (
        <div>
          {this.props.jedi.name} {this.props.jedi.age}
        </div>
      )
    }
  }

  class Jedis extends React.Component {
    static propTypes = {
      jedis: PropTypes.arrayOf(Jedi)
    }

    // we either render a primitive, an object or a list
    // to render a list, use map
    render() {
      return (
        <div>
          {this.props.jedis.map((jediItem) => (
            <Jedi jedi={jediItem} key={null} /> // bind each item to Jedi.jedi
          ))}
        </div>
      )
    }
  }

  it('renders a component', () => {
    class Application extends React.Component {
      render() {
        return (
          <div>
            <Jedi jedi={yodaData} />
          </div>
        )
      }
    }

    cy.mount(<Application />)
    cy.contains('div', 'Yoda 300')
  })

  it('renders the component and its children as a list', () => {
    class Application extends React.Component {
      render() {
        return (
          <div>
            <Jedis jedis={characters} />
          </div>
        )
      }
    }

    cy.mount(<Application />)
    cy.contains('div', 'Yoda 300')
    cy.contains('div', 'Obi-Wan Kenobi 30')
  })
})
