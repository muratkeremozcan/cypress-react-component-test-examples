/// <reference types="cypress" />
import React, { Component } from 'react'

import Todos from './Todos'

const todos = [
  {
    title: 'clean',
    done: false,
    id: 1
  },
  {
    title: 'do the dishes',
    done: true,
    id: 2
  }
]

// need a parent component to include the children components
class App extends Component {
  render() {
    return <Todos todos={todos} />
  }
}

it('renders todos', () => {
  cy.viewport(400, 500)
  cy.mount(<App />)

  cy.contains('[data-cy="todo"]', 'clean')
    .find('input[type=checkbox]')
    .should('not.be.checked')
  cy.contains('[data-cy="todo"]', 'do the dishes')
    .find('input[type=checkbox]')
    .should('be.checked')
})

// https://softchris.github.io/books/react/thinkingincomponents/
