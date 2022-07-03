import App from './lifting-state'

describe('lifting state', () => {
  it('should manage state at parent component', () => {
    cy.mount(<App />)

    cy.get('#name').type('Murat')
    cy.get('#animal').type('bird')
    cy.getByCy('display').should(
      'contain',
      'Hey Murat, your favorite animal is bird'
    )
    cy.get('#name').clear().type('Kent')
    cy.get('#animal').clear().type('koala')
    cy.getByCy('display').should(
      'contain',
      'Hey Kent, your favorite animal is koala'
    )
  })
})
