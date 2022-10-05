import App from './App'

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
