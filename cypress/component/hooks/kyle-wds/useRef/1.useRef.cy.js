import App from './1.useRef'

describe('useRef', () => {
  it('should store previous state and focus', () => {
    cy.mount(<App />)

    const name = 'Ali'

    cy.get('input').type(name)
    cy.getByCy('name-text')
      .click()
      .should(
        'contain',
        `My name is ${name} and it used to be ${name.slice(0, -1)}`
      )

    cy.get('input').should('not.be.focused')
    cy.get('button').click()
    cy.get('input').should('be.focused')
  })
})
