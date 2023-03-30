import LoginForm from './LoginForm'

describe('LoginForm', {viewportWidth: 600, viewportHeight: 600}, () => {
  it('should verify password and both field cases', () => {
    cy.mount(<LoginForm />)

    cy.get('img').should('be.visible')
    cy.contains('#passwordToggle', 'Show').should('be.visible')

    cy.on('window:alert', cy.spy().as('alert'))

    cy.log('**both empty**')
    cy.contains('button', 'Log in').click()
    cy.contains('email is a required field')
    cy.contains('password is a required field')

    cy.log('**password empty**')
    cy.get('#email').type('test@example.com')
    cy.contains('button', 'Log in').should('be.disabled')
    cy.contains('email is a required field').should('not.exist')
    cy.contains('password is a required field')

    cy.log('**both filled**')
    cy.getByCy('PasswordInput').type('123456')
    cy.contains('button', 'Log in').should('be.enabled').click()
    cy.get('@alert').should('have.been.calledWith', 'submitting')
  })

  it('should verify email', () => {
    cy.mount(<LoginForm />)

    cy.log('**email empty**')
    cy.contains('email is a required field').should('not.exist')

    cy.getByCy('PasswordInput').type('123456')
    cy.contains('email is a required field')

    cy.log('**email must be valid**')
    cy.get('#email').type('a')
    cy.contains('email must be a valid email')
    cy.get('#email').type('test@example.com')
    cy.contains('email must be a valid email').should('not.exist')
  })
})
