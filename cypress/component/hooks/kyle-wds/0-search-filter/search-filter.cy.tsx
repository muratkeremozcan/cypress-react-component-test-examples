import App from './search-filter'

describe('App', () => {
  it('should add items and filter them', () => {
    cy.mount(<App />)

    const searchItems = [
      'foo',
      'bar',
      'baz',
      'qux',
      'quux',
      'corge',
      'grault',
      'garply',
      'waldo',
      'fred',
      'plugh',
      'xyzzy',
      'thud'
    ]
    searchItems.forEach((item) => cy.getByCy('new-item').type(`${item}{enter}`, { delay: 0 }))
    cy.getByCy('search').type('ba')
    cy.getByCy('filtered-items').should('have.length', 2)

    cy.getByCy('search').clear()
    cy.getByCy('filtered-items').should('have.length', searchItems.length)
  })
})
