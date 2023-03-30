import PasswordInput from './PasswordInput'

describe('PasswordInput', () => {
  it('should render children: Input and Button', () => {
    cy.mount(<PasswordInput label="foo" id={'id'} />)

    cy.getByCy('Input').should('be.visible')
    cy.getByCy('Button').should('be.visible')

    cy.getByCy('form-input')
      .should('have.attr', 'type', 'password')
      .type('bar', {delay: 0})

    cy.getByCy('Button').contains('Show').click()
    cy.getByCy('form-input').should('have.attr', 'type', 'text')

    cy.getByCy('Button').contains('Hide').click()
    cy.getByCy('form-input').should('have.attr', 'type', 'password')
  })
})
