/// <reference types="cypress" />
import React from 'react'

import Todo from './Todo'

it('renders Todo', () => {
  const todo = {
    title: 'clean',
    done: false,
    id: 1
  }
  // KEY: stub functions internal to the component
  const handleChecked = cy.stub()

  cy.mount(<Todo todo={todo} handleChecked={handleChecked} key={todo.id} />)

  cy.contains('clean')
  cy.get('input[type=checkbox]')
    .check()
    .then(() => expect(handleChecked).to.have.been.calledWith(todo))
  // or like this
  cy.wrap(handleChecked).should('have.been.calledWith', todo)
})

// https://softchris.github.io/books/react/thinkingincomponents/
