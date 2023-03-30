import NotFound from './NotFound'
import {BrowserRouter} from 'react-router-dom'

describe('NotFound', () => {
  it('should render page text and link', () => {
    cy.mount(
      <BrowserRouter>
        <NotFound />
      </BrowserRouter>,
    )

    cy.contains('Page Not Found')
    cy.contains(
      "The page you're looking for isn't available. Try with another page or use the go home button below",
    )
    cy.get('[href="/login"]')
  })
})
