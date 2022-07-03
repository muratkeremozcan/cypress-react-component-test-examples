import App from './useImperativeHandle'

describe('useImperativeHandle', { viewportWidth: 200 }, () => {
  it('should scroll to the top and bottom of the sub component', () => {
    cy.mount(<App />)

    cy.contains('scroll to bottom').click()
    cy.contains('scroll to top').click()
    cy.contains('scroll to bottom').click()
  })
})
