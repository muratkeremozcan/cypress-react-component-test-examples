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
    cy.intercept(
      'POST',
      'https://auth-provider.example.com/api/login',
      (req) => {
        return req.reply({ username: req.body.username })
      }
    ).as('login')

    cy.mount(<LoginSubmission />)
    const { username, password } = buildLoginForm()

    cy.getByCy('username').type(username)
    cy.getByCy('password').type(password)
    cy.getByCy('submit').click()

    cy.wait('@login')
    cy.contains(`Welcome ${username}`)
  })

  it.skip('omitting the password results in an error', () => {
    Cypress.on('uncaught:exception', () => false)
    cy.intercept(
      'POST',
      'https://auth-provider.example.com/api/login',
      (req) => {
        // if (!req.body.password) {
        console.log('no password')
        return req.reply((res) => console.log(res))
        // return req.reply((res) =>
        //   res.send({
        //     status: 400,
        //     message: 'Missing password'
        //   })
        // )
        // }
      }
    ).as('login')

    cy.mount(<LoginSubmission />)
    const { username } = buildLoginForm()

    cy.getByCy('username').type(username)
    cy.getByCy('submit').click()

    cy.wait('@login')
    // cy.contains('password required')
  })
})
