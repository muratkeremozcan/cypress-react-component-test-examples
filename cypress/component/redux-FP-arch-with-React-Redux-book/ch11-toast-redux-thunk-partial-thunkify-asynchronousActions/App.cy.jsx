import App from './App'
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import rootReducer from './rootReducer'
import './toasts/ToastList.css'

const store = createStore(rootReducer, compose(applyMiddleware(thunk)))

describe('Toast app', () => {
  it('should add and remove toasts', () => {
    cy.clock()
    cy.mount(
      <Provider store={store}>
        <App />
      </Provider>
    )

    cy.get('button').click()
    cy.get('.toast-item-delete').should('be.visible').click()

    cy.get('button').click()
    cy.tick(10000)
    cy.get('.toast-item-delete').should('not.exist')
  })
})
