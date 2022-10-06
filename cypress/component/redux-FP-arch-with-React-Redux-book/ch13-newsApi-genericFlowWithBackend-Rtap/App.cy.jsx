import App from './App'

describe('Weather app', () => {
  it('should render correctly', () => {
    cy.intercept('GET', 'https://hacker-news.firebaseio.com/**').as('api-call')
    cy.mount(<App />)

    const maxNoOfNewStories = 5
    Cypress._.times(maxNoOfNewStories + 1, cy.wait('@api-call'))

    cy.getByCy('show-more').click()
    cy.getByCyLike('story-').should('have.length', maxNoOfNewStories)
  })
})
