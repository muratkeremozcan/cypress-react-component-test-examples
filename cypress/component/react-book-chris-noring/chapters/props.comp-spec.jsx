/// <reference types="cypress" />
import React from 'react'
import { mount } from '@cypress/react'
import PropType from 'prop-types'

describe('https://softchris.github.io/books/react/props/', () => {
  const jediData = {
    name: 'Yoda',
    age: 300
  }

  const jedis = [
    {
      name: 'Yoda',
      age: 300
    },
    {
      name: 'Palpatine',
      age: 60
    }
  ]

  class Jedi extends React.Component {
    // best practice to use propTypes, and make it a member of the class
    static propTypes = {
      jedi: PropType.shape({
        name: PropType.string.isRequired,
        age: PropType.number.isRequired,
        key: PropType.number
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
      jedis: PropType.arrayOf(Jedi)
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
            <Jedi jedi={jediData} />
          </div>
        )
      }
    }

    mount(<Application />)
  })

  it('renders the component and its children as a list', () => {
    class Application extends React.Component {
      render() {
        return (
          <div>
            <Jedis jedis={jedis} />
          </div>
        )
      }
    }

    mount(<Application />)
  })
})
