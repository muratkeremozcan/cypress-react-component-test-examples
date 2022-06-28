import App from './hook-flow'

describe('Hook flow', () => {
  it('should render', () => {
    cy.mount(<App />)
  })
})
