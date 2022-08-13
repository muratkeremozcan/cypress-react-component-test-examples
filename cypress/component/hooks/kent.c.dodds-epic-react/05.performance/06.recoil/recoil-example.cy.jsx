import App from './recoil-example'

describe('Recoil', () => {
  it('renders a grid', () => {
    cy.mount(<App />)

    cy.get('#dogName').type('Doggo')
    cy.contains('Doggo,')

    cy.get('#rows').clear().type(3)
    cy.get('#columns').clear().type(3)
    cy.get('.cell')
      .should('have.length', 9)
      .each(($cell) =>
        cy
          .wrap($cell)
          .invoke('text')
          .then((initialText) => {
            cy.wrap($cell).click()
            cy.wrap($cell).invoke('text').should('not.equal', initialText)
          })
      )
  })
})
