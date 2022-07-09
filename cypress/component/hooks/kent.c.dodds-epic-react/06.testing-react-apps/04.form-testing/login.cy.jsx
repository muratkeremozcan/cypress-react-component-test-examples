import Login from '../05.mocking-http-requests/login'
import faker from 'faker'

function buildLoginForm(overrides) {
  return {
    username: faker.internet.userName(),
    password: faker.internet.password(),
    ...overrides
  }
}

it('submitting the form calls onSubmit with username and password', () => {
  cy.mount(<Login onSubmit={cy.stub().as('handleSubmit')} />)
  const { username, password } = buildLoginForm()

  cy.getByCy('username').type(username)
  cy.getByCy('password').type(password)
  cy.getByCy('submit').click()

  cy.get('@handleSubmit').should('be.calledOnceWith', { username, password })
})

// 1:1 comparison with RTL
// https://github.com/muratkeremozcan/epic-react-testingJs/blob/main/epic-react/06.testing-react-apps/src/__tests__/exercise/04.js
