// @ts-ignore
describe('app-a', () => {
  it('passes sanity', () => {
    cy.visit('http://localhost:3000')
    cy.contains('Hello world')
  })
})
