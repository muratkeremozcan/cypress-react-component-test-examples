import App from './App'

describe('Weather app', () => {
  it('should render correctly', () => {
    cy.mount(<App />)

    const maxNoOfNewStories = 5

    cy.getByCyLike('story-').should('have.length', maxNoOfNewStories)
    cy.getByCy('show-more').click()
    cy.getByCyLike('story-').should('have.length', 2 * maxNoOfNewStories)
  })
})
