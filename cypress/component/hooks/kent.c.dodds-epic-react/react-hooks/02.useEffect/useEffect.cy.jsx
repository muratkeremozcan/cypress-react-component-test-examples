import Greeting from './useEffect'

describe('useEffect', () => {
  beforeEach(() => {
    cy.window()
      .its('localStorage')
      .then((localStorage) => {
        cy.spy(localStorage, 'getItem').as('getItem')
        cy.spy(localStorage, 'setItem').as('setItem')
      })
  })
  it('should set localStorage as empty string, and get localStorage on mount t', () => {
    cy.mount(<Greeting />)

    cy.get('@getItem')
      .should('have.been.calledWith', 'name')
      .and('returned', null)

    cy.get('@setItem').should('have.been.calledWith', 'name', '')
  })

  it('should set local storage with submitted value', () => {
    cy.mount(<Greeting />)
    cy.get('#name').type('Murat')

    cy.get('@setItem')
      .should('have.been.calledWith', 'name', 'Murat')
      .and('returned', undefined)
      .then(() => expect(localStorage.getItem('name')).to.eq('Murat'))
  })
})
