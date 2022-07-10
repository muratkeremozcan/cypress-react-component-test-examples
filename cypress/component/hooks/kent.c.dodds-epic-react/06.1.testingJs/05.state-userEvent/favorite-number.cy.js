import { FavoriteNumber } from './favorite-number'

it('entering a valid value shows the number', () => {
  cy.mount(<FavoriteNumber />)

  cy.get('#favorite-number').type(3)
  cy.getByCy('favorite-number').contains(3)
})

// 1:1 comparison with RTL
// https://github.com/muratkeremozcan/epic-react-testingJs/blob/main/testing-js/03.rtl/src/__tests__/05.KEY-state-userEvent.js

it('entering an invalid value shows an error message', () => {
  cy.mount(<FavoriteNumber />)

  cy.get('#favorite-number').type(10)
  cy.getByCy('invalid-number').contains('The number is invalid')
  // https://testing-library.com/docs/queries/about
  cy.findByRole('alert').contains('The number is invalid')
})

// https://github.com/muratkeremozcan/epic-react-testingJs/blob/main/testing-js/03.rtl/src/__tests__/06.KEY.prop-updates-debug-rerender.js
it('rerender', () => {
  cy.mount(<FavoriteNumber />)

  cy.get('#favorite-number').type(10)
  cy.findByRole('alert').contains('The number is invalid')

  cy.mount(<FavoriteNumber max={20} />)
  cy.get('#favorite-number').type(10)
  cy.getByCy('favorite-number').contains(10)

  cy.get('#favorite-number').clear().type(20)
  cy.findByRole('alert').contains('The number is invalid')
})
