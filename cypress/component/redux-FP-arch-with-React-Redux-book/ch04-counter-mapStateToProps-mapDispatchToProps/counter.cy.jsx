import Counter from './counter'
import reducer from './reducer'
import { store as importedStore } from './store'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

// [redux4] Provider - a React component that you’ll render at the top of the React app.
// takes  the store as a prop and wraps the top-level component in your app
// any child component rendered within Provider can access the Redux store

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
    const customStore = createStore(reducer)
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
    cy.mount(
      <Provider store={createStore(reducer, 10)}>
        <Counter />
      </Provider>
    )

    cy.getByCy('+').dblclick()
    cy.contains('12')
    cy.getByCy('-').click()
    cy.contains('11')
  })
})
