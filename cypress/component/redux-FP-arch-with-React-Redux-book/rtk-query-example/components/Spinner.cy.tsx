import Spinner from './Spinner'

describe('Spinner', () => {
  it('should render the spinner', () => {
    cy.mount(<Spinner />)
    cy.getByCy('Spinner').should('be.visible')
  })
})
