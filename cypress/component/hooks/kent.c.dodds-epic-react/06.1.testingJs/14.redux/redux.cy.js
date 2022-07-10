import { Counter } from './redux-counter'
import { store } from './redux-store'
import { Provider } from 'react-redux'
import { reducer } from './redux-reducer'
import { createStore } from 'redux'

it('can render with redux with defaults', () => {
  // problem: like react router, redux is a wrapper context around a component
  // (1) render the component within a redux Provider with a store prop
  cy.mount(
    <Provider store={store}>
      <Counter />
    </Provider>
  )

  cy.getByCy('+').click()
  cy.findByLabelText('count').should('have.text', '1')
})

it('can render with redux with custom initial state', () => {
  // Redux’s createStore function takes up to three arguments: a reducer, an initial state, and an enhancer.
  const store = createStore(reducer, { count: 3 })

  cy.mount(
    <Provider store={store}>
      <Counter />
    </Provider>
  )

  cy.getByCy('-').click()
  cy.findByLabelText('count').should('have.text', '2')
})

// 1:1 comparison with RTL
// https://github.com/muratkeremozcan/epic-react-testingJs/blob/main/testing-js/03.rtl/src/__tests__/14.KEY-redux-02.js
