import App from './App'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './rootReducer'

const store = createStore(rootReducer)

describe('App', () => {
  it('should render correctly', () => {
    cy.mount(
      <Provider store={store}>
        <App />
      </Provider>
    )

    cy.getByCy('show-more').should('have.length', 3).and('be.visible').first().click()
    cy.getByCy('show-more')
    cy.contains('This is my content3')
  })
})
