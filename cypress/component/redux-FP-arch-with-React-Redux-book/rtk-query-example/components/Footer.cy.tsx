import Footer from './Footer'

describe('Footer', () => {
  it('should render', () => {
    cy.mount(<Footer />)

    cy.contains("Don't have an account yet?")
      .find('a')
      .should('have.attr', 'href', 'https://www.extend.com/contact')
      .contains('Contact us')
  })
})
