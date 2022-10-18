import TodoForm from './TodoForm'
import { store } from '../store/store'
import { Provider } from 'react-redux'
import './todoForm.module.scss'

describe('TodoForm', () => {
  it('should', () => {
    cy.mount(
      <Provider store={store}>
        <TodoForm />
      </Provider>
    )

    cy.get('input')

    // this might we an example how how we have to go higher
    // when needing to test the click event
  })
})
