import LoginSubmission from './login-submission'
import faker from 'faker'

function buildLoginForm(overrides) {
  return {
    username: faker.internet.userName(),
    password: faker.internet.password(),
    ...overrides
  }
}

describe('Mocking http requests', () => {
  context('1:1 comparison with RTL and MSW', () => {
    beforeEach(() => {
      Cypress.on('uncaught:exception', () => false)
      cy.intercept(
        'POST',
        'https://auth-provider.example.com/api/login',
        (req) => {
          if (!req.body.password) {
            return req.reply({
              statusCode: 400,
              body: {
                message: `Missing password for the user ${req.body.username}`
              }
            })
          }
          if (!req.body.username) {
            return req.reply({
              statusCode: 400,
              body: {
                message: `Missing username`
              }
            })
          }
          return req.reply({ username: req.body.username })
        }
      ).as('login')
    })
    it(`logging in displays the user's username`, () => {
      cy.mount(<LoginSubmission />)
      const { username, password } = buildLoginForm()

      cy.getByCy('username').type(username)
      cy.getByCy('password').type(password)
      cy.getByCy('submit').click()

      cy.wait('@login')
      cy.contains(`Welcome ${username}`)
    })

    it('omitting the password results in an error', () => {
      cy.mount(<LoginSubmission />)
      const { username } = buildLoginForm()

      cy.getByCy('username').type(username)
      cy.getByCy('submit').click()

      cy.wait('@login')
      cy.contains('div', `Missing password for the user ${username}`)
    })

    it('omitting the password results in an error (static response with req.reply)', () => {
      cy.mount(<LoginSubmission />)
      const { password } = buildLoginForm()

      cy.getByCy('password').type(password)
      cy.getByCy('submit').click()

      cy.wait('@login')
      cy.contains('div', `Missing username`)
    })
  })

  context('static response alternatives', () => {
    it('omitting the password results in an error (static response)', () => {
      const message = 'Missing password'
      cy.intercept(
        {
          method: 'POST',
          url: 'https://auth-provider.example.com/api/login'
        },
        {
          statusCode: 400,
          body: {
            message
          }
        }
      ).as('login')

      cy.mount(<LoginSubmission />)
      const { username } = buildLoginForm()

      cy.getByCy('username').type(username)
      cy.getByCy('submit').click()

      cy.wait('@login')
      cy.contains('div', message)
    })

    it('omitting the username results in an error (static response)', () => {
      const message = 'Missing username'
      cy.intercept(
        {
          method: 'POST',
          url: 'https://auth-provider.example.com/api/login'
        },
        {
          statusCode: 400,
          body: {
            message
          }
        }
      ).as('login')

      cy.mount(<LoginSubmission />)
      const { password } = buildLoginForm()

      cy.getByCy('password').type(password)
      cy.getByCy('submit').click()

      cy.wait('@login')
      cy.contains('div', message)
    })

    it('unknown server error displays the error message (static response)', () => {
      const message = 'Oh no, something bad happened'
      cy.intercept(
        {
          method: 'POST',
          url: 'https://auth-provider.example.com/api/login'
        },
        {
          statusCode: 500,
          body: {
            message
          }
        }
      ).as('login')

      cy.mount(<LoginSubmission />)
      const { username } = buildLoginForm()

      cy.getByCy('username').type(username)
      cy.getByCy('submit').click()

      cy.wait('@login')
      cy.contains('div', message)
    })
  })
})

// 1:1 comparison with RTL
// https://github.com/muratkeremozcan/epic-react-testingJs/blob/main/epic-react/06.testing-react-apps/src/__tests__/exercise/05.js#L24
