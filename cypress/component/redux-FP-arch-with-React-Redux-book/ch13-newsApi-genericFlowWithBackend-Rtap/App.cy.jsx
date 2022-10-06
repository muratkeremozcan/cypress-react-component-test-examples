import App from './App'

// not reliable in CI. Painful to stub the network. Just run it locally
describe.skip('News app', () => {
  it('should render correctly', () => {
    cy.intercept('GET', 'https://hacker-news.firebaseio.com/**').as('api-call')
    cy.mount(<App />)

    const maxNoOfNewStories = 5
    Cypress._.times(maxNoOfNewStories, cy.wait('@api-call'))

    cy.getByCy('show-more').click()
    cy.getByCyLike('story-').should('have.length', maxNoOfNewStories)
  })
})
