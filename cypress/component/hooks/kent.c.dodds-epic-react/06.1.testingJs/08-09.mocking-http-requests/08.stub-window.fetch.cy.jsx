import GreetingLoader from './greeting-loader'
import spok from 'cy-spok'

// https://glebbahmutov.com/blog/effective-react-tests/#mocking-api-requests
it('loads greetings on click - stubbing window fetch', () => {
  Cypress.on('uncaught:exception', () => false)
  cy.stub(window, 'fetch').resolves({ ok: true }).as('fetch')
  cy.mount(<GreetingLoader />)

  cy.get('#name').type('Mary')
  cy.get('button').click()
  cy.get('@fetch')
    .should('have.been.calledOnce')
    .its('args.0.1')
    .should(
      spok({
        body: '{"subject":"Mary"}',
        method: 'POST'
      })
    )
})

// 1:1 comparison with RTL
// https://github.com/muratkeremozcan/epic-react-testingJs/blob/main/testing-js/03.rtl/src/__tests__/08.KEY-http-jest-mock.js
