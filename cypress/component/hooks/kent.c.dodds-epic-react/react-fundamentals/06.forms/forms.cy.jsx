// https://github.com/muratkeremozcan/epic-react/blob/main/01.react-fundamentals/src/exercise/06.js

import App from './forms'

describe('We cam render styles with className and style prop', () => {
  beforeEach(() => cy.mount(<App />))
  it('', () => {
    const spy = cy.spy().as('alert') // can use cy.stub too
    cy.on('window:alert', spy)

    cy.mount(<App />)

    cy.get('#userNameInput').type('murat')
    cy.get('button').click()
    cy.get('@alert').should('have.been.calledWith', 'You entered: murat')
  })
})
