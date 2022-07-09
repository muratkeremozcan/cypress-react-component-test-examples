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
  it(`logging in displays the user's username`, () => {
    cy.intercept('POST', 'https://auth-provider.example.com/api/login', (req) =>
      req.reply({ username: req.body.username })
    ).as('login')

    cy.mount(<LoginSubmission />)
    const { username, password } = buildLoginForm()

    cy.getByCy('username').type(username)
    cy.getByCy('password').type(password)
    cy.getByCy('submit').click()

    cy.wait('@login')
    cy.contains(`Welcome ${username}`)
  })

  it.skip('omitting the password results in an error (dynamic response)', () => {
    Cypress.on('uncaught:exception', () => false)
    cy.intercept(
      'POST',
      'https://auth-provider.example.com/api/login',
      (req) => {
        return req.reply((res) => console.log(res)) // blows up...
        // if (!req.body.password) { // this should just work...
        //   return req.reply((res) =>
        //     res.send({
        //       statusCode: 400,
        //       message: 'Missing password'
        //     })
        //   )
        // }
        // if (!req.body.username) {
        //   return req.reply((res) =>
        //     res.send({
        //       statusCode: 400,
        //       message: 'Missing username'
        //     })
        //   )
        // }
        // return req.reply({ username: req.body.username })
      }
    ).as('login')

    cy.mount(<LoginSubmission />)
    const { username } = buildLoginForm()

    cy.getByCy('username').type(username)
    cy.getByCy('submit').click()

    cy.wait('@login')
    // cy.contains('password required')
  })

  it('omitting the password results in an error (static response with req.reply)', () => {
    const message = 'Missing password'
    cy.intercept(
      {
        method: 'POST',
        url: 'https://auth-provider.example.com/api/login'
      },
      (req) =>
        req.reply({
          statusCode: 400,
          body: {
            message
          }
        })
    ).as('login')

    cy.mount(<LoginSubmission />)
    const { username } = buildLoginForm()

    cy.getByCy('username').type(username)
    cy.getByCy('submit').click()

    cy.wait('@login')
    cy.contains('div', message)
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
