import App, { store as importedStore } from './App'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducer from './reducer'
import './App.css'

describe('App', () => {
  it('should toggle the sidebar with imported store', () => {
    cy.mount(
      <Provider store={importedStore}>
        <App />
      </Provider>
    )

    cy.getByCy('sidebar-closed').should('be.visible')
    cy.getByCy('toggle').click()
    cy.getByCy('sidebar-opened').should('be.visible')
  })

  it('should toggle the sidebar with created store', () => {
    const customStore = createStore(reducer)
    cy.mount(
      <Provider store={customStore}>
        <App />
      </Provider>
    )

    cy.getByCy('sidebar-opened').should('be.visible')
    cy.getByCy('toggle').click()
    cy.getByCy('sidebar-closed').should('be.visible')
  })
})
