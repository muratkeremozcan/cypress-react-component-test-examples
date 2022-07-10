import GreetingLoader from './greeting-loader'

// instead of mocking the whole api, just intercept loadGreeting
// so that we can have an integration test

// https://glebbahmutov.com/blog/effective-react-tests/#mocking-api-requests
it('loads greetings on click - stubbing window fetch', () => {
  Cypress.on('uncaught:exception', () => false)
  cy.intercept(
    {
      method: '*',
      url: '**/greeting'
    },
    (req) =>
      req.reply({
        body: { data: { greeting: `Hello ${req.body.subject}` } }
      })
  ).as('greeting')
  cy.mount(<GreetingLoader />)

  cy.get('#name').type('Mary')
  cy.get('button').click()
  cy.wait('@greeting')
  cy.contains('form > div', 'Hello Mary')
})

// 1:1 comparison with RTL
// https://github.com/muratkeremozcan/epic-react-testingJs/blob/main/testing-js/03.rtl/src/__tests__/09.http-msw-mock.js
