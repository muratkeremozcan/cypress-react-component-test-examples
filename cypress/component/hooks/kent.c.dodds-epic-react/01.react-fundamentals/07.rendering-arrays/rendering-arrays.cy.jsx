import App from './rendering-arrays'

it('should maintain state and track list elements over time when using key prop ', () => {
  cy.mount(<App />)

  cy.wrap(['apple', 'orange', 'grape', 'pear']).each((item) =>
    cy.getByCy(item).contains(`${item}`)
  )

  cy.get('[data-cy="apple"] > button').click()
  cy.get('[data-cy="orange"] > button').click()
  cy.getByCy('add-item').click().click()

  cy.wrap(['apple', 'orange', 'grape', 'pear']).each((item) =>
    cy.getByCy(item).contains(`${item}`)
  )
})
