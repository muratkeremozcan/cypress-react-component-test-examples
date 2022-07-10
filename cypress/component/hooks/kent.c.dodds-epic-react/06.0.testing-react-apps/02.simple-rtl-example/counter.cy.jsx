import Counter from './counter'

it('counter increments and decrements when the buttons are clicked', () => {
  cy.mount(<Counter />)
  cy.getByCy('message').contains('Current count: 0')

  cy.getByCy('increment').click()
  cy.getByCy('message').contains('Current count: 1')

  cy.getByCy('decrement').click()
  cy.getByCy('message').contains('Current count: 0')
})

// 1:1 comparison with RTL
// https://github.com/muratkeremozcan/epic-react-testingJs/blob/main/epic-react/06.testing-react-apps/src/__tests__/exercise/02.js
// https://github.com/muratkeremozcan/epic-react-testingJs/blob/main/epic-react/06.testing-react-apps/src/__tests__/exercise/03.js
// https://github.com/muratkeremozcan/epic-react-testingJs/blob/main/epic-react/06.testing-react-apps/src/__tests__/exercise/04.js
