import './index.scss'
import App from './App'
import { store } from './store/store'
import { Provider } from 'react-redux'
import spok from 'cy-spok'
import { removeTodo } from './store/reducers/todosSlice'

const resetStore = () =>
  cy
    .window()
    .its('store')
    .invoke('getState')
    .its('todos.data')
    .each((todo: any) => {
      cy.window().its('store').invoke('dispatch', removeTodo(todo.id))
    })

describe('Todo App', () => {
  beforeEach(() => {
    cy.mount(
      <Provider store={store}>
        <App />
      </Provider>
    )
    resetStore()
  })
  it('should add todos', () => {
    cy.get('input[placeholder="Add new todo here"]')
      .type('Learn Cypress{enter}')
      .type('Learn JavaScript{enter}')
    cy.get('[data-cy=todo]').should('have.length', 2)
    cy.contains('[data-cy="pending-count"]', '2')
    cy.contains('[data-cy=todo]', 'Learn JavaScript').find('[alt=remove]').click()
    cy.contains('[data-cy=todo]', 'Learn Cypress').should('be.visible')
    cy.contains('[data-cy="pending-count"]', '1')
    cy.get('[data-cy=todo]').should('have.length', 1)
  })

  // interesting: the 2 tests share store!
  it('adds todos, check store', () => {
    // add a few todos using the application UI
    cy.get('input[placeholder="Add new todo here"]')
      .type('Learn Cypress{enter}')
      .type('Learn JavaScript{enter}')

    // we assume the application sets "window.store"
    // if running inside the Cypress test
    cy.log('**check the Redux state**')
    cy.window()
      .its('store')
      .invoke('getState')
      // .then((data) => {
      //   console.log(JSON.stringify(data))
      // })
      .should(
        spok({
          todos: {
            data: [
              {
                $topic: 'The second todo',
                text: 'Learn JavaScript',
                id: spok.number
              },
              {
                $topic: 'The first todo',
                text: 'Learn Cypress',
                id: spok.number
              }
            ]
          }
        })
      )
      // grab the ID of the first todo item
      // grab the Redux store again and dispatch the remove todos action
      .its('todos.data.0.id')
      .then((id) => {
        // Problem: it dispatches, but nothing is removed
        cy.window().its('store').invoke('dispatch', removeTodo(id))
      })

    // once we remove the first todo, the UI should update
    // confirm the UI changes and the single todo remains
    cy.contains('[data-cy="pending-count"]', '1')
    cy.contains('[data-cy=todo]', 'Learn Cypress')

    cy.window()
      .its('store')
      .invoke('getState')
      .should(
        spok({
          todos: {
            data: [
              {
                $topic: 'The first todo',
                text: 'Learn Cypress',
                id: spok.number
              }
            ]
          }
        })
      )
  })
})
