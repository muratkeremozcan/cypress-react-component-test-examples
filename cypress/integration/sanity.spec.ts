// @ts-ignore
describe('app-a', () => {
  it('passes sanity', () => {
    cy.visit('/')
    cy.contains('Hello world')
  })
})
