import Todo from './Todo'
import { store } from '../store/store'
import { Provider } from 'react-redux'
import './todo.module.scss'

describe('Todo', () => {
  it('should', () => {
    const text = 'foo'
    const id = 1

    cy.mount(
      <Provider store={store}>
        <Todo text={text} id={id} />
      </Provider>
    )

    cy.contains(text).should('be.visible')

    // this might we an example how how we have to go higher
    // when needing to test the click event
  })
})
