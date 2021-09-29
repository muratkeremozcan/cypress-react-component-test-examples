describe('app-a', () => {
  it('passes sanity', () => {
    cy.visit('/');
    cy.contains('Hello world');
    cy.log('my secret is ', Cypress.env('SECRET'));
    console.log('my secret is ', Cypress.env('SECRET'));

    cy.wrap(Cypress.env('SECRET')).should('equal', 'at app abc');
  })
})
