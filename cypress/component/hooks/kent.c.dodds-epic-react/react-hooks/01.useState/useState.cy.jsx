import Greeting from './useState'

describe('useState', () => {
  it('should ask for name without a prop, and submit one', () => {
    cy.mount(<Greeting />)
    cy.contains('Please type your name')

    cy.get('#name').type('Murat')
    cy.contains('Hello Murat')
  })
  it('should display the name with a prop', () => {
    cy.mount(<Greeting initialName="Murat" />)
    cy.contains('Hello Murat')
  })
})
