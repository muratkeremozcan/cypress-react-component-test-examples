import UserStorage from './3.user-storage'

describe('UserStorage', () => {
  it('should select each item in the list', () => {
    cy.mount(<UserStorage />)
    cy.get('select').should('be.visible')

    cy.wrap(['Akiko', 'Clarisse', 'Sanjiv', 'Jason']).each((dropdownItem) => {
      cy.get('select')
        .select(dropdownItem)
        .should(() => expect(localStorage.getItem('user')).eq(dropdownItem))
    })
  })

  it('should have no local storage in the beginning', () => {
    cy.mount(<UserStorage />)

    cy.then(() => expect(localStorage.getItem('user')).to.eq('undefined'))
  })

  it('should preserve localstorage on reload/remount', () => {
    cy.window()
      .its('localStorage')
      .then((localStorage) => {
        cy.spy(localStorage, 'getItem').as('1stUseEffect')
        cy.spy(localStorage, 'setItem').as('2ndUseEffect')
      })

    // devhints.io/sinon-chai
    cy.mount(<UserStorage />)
    cy.get('@1stUseEffect')
      .should('be.calledWith', 'user')
      .should('returned', null)

    cy.get('select').select('Akiko')
    cy.get('@2ndUseEffect')
      .should('be.calledWith', 'user', 'Akiko')
      .and('returned', undefined)
      .then(() => expect(localStorage.getItem('user')).to.eq('Akiko'))

    cy.mount(<UserStorage />)
    cy.get('@1stUseEffect')
      .should('be.calledWith', 'user')
      .and('returned', 'Akiko')
      .then(() => expect(localStorage.getItem('user')).to.eq('Akiko'))
  })
})
