import Logo from './Logo'

describe('Logo', () => {
  it('should render at 100%', () => {
    cy.mount(<Logo />)

    cy.get('img')
      .should('have.attr', 'width', '100%')
      .and('have.attr', 'height', '100%')
  })

  it('should render at custom pixel width & height', () => {
    const fiftyPixels = 50

    cy.mount(<Logo width={fiftyPixels} height={fiftyPixels} />)

    cy.get('img')
      .should('have.attr', 'width', fiftyPixels)
      .and('have.attr', 'height', fiftyPixels)
  })
})
