import App, { store } from './App'
import { Provider } from 'react-redux'
import response from './response.json'

describe('App', () => {
  it('should render correctly', () => {
    cy.mount(
      <Provider store={store}>
        <App />
      </Provider>
    )

    // cy.intercept('GET', '*').as('axios-response') // non-stubbed version
    // cy.intercept('GET', '*', { body: response }).as('axios-response')
    cy.intercept('GET', 'http://api.openweathermap.org/**/*', { body: response }).as(
      'axios-response'
    )
    cy.get('input').type('Chicago')
    cy.get('button').click()
    cy.wait('@axios-response')
      .its('response.body')
      .then((body) => cy.wrap(body).its('main.temp').should('be.a', 'number'))
      .then((temp) => {
        cy.contains('Chicago')
        cy.contains(temp)
      })
  })
})
