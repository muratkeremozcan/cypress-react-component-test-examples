import App from './App'

// disclaimer: usually it's a bad idea to test routing with component tests
// but we are hacking around a bit so that uncertain routes redirect to the home page
// and each route has a href link for navigation

const getByHref = (route) => cy.get(`a[href="/${route}/"]`)

describe('App', () => {
  it('should render home page', () => {
    cy.mount(<App />)

    getByHref('books')
    getByHref('articles')
    getByHref('moviereviews')
  })

  const routes = ['books', 'articles', 'moviereviews']
  it.each(routes)('should render %s page', (route) => {
    cy.mount(<App />)

    getByHref(route).click()
    cy.location('pathname').should('eq', `/${route}/`)

    cy.contains('Home').click()
    getByHref(route).should('be.visible')
  })
})
