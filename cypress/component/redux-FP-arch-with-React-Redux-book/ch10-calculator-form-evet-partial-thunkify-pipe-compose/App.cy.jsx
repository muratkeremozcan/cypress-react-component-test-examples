import App from './App'
import reducer from './reducer'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

describe('LoanRequest app', () => {
  it('should calculate the total interest and total paid', () => {
    cy.mount(
      <Provider store={createStore(reducer)}>
        <App />
      </Provider>
    )

    cy.getByCy('amount').clear().type('1000')
    cy.getByCy('term').clear().type('30')
    cy.getByCy('interest').clear().type('3')
    cy.getByCy('calculate').click()

    cy.getByCy('total-interest').should('contain', 'Total Interest Paid: 900')
    cy.getByCy('total-paid').should('contain', 'Total Amount Paid: 1900')
  })
})
