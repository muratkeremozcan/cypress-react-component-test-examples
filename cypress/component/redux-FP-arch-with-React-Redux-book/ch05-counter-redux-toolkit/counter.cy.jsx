import Counter from './counter'
import reducer from './reducer'
import { store as importedStore } from './store'
// import { createStore } from 'redux'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'

describe('Counter', () => {
  it('should import store', () => {
    cy.mount(
      <Provider store={importedStore}>
        <Counter />
      </Provider>
    )

    cy.getByCy('+').dblclick()
    cy.contains('2')
    cy.getByCy('-').click()
    cy.contains('1')
  })

  it('should create store in the test', () => {
    // const customStore = createStore(reducer)
    const customStore = configureStore({ reducer })
    cy.mount(
      <Provider store={customStore}>
        <Counter />
      </Provider>
    )

    cy.getByCy('+').dblclick()
    cy.contains('2')
    cy.getByCy('-').click()
    cy.contains('1')
  })

  it('should create store with a custom initial state', () => {
    // const customStore = createStore(reducer, 3)
    const customStore = configureStore({ reducer })
    customStore.dispatch({ type: 'increment' })

    cy.mount(
      <Provider store={customStore}>
        <Counter />
      </Provider>
    )

    cy.getByCy('+').dblclick()
    cy.contains('3')
    cy.getByCy('-').click()
    cy.contains('2')
  })
})
