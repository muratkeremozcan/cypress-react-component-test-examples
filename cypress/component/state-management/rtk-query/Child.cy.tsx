import Child from './Child'
import { Provider } from 'react-redux'
import { store } from './store'

it('should', () => {
  cy.mount(
    <Provider store={store}>
      <Child />
    </Provider>
  )
  cy.contains('Hello from Child!')

  const newState = 'Hello from Child, updated!'
  cy.getByCy('update-state').click()

  cy.getByCy('Child').contains(newState)
})
