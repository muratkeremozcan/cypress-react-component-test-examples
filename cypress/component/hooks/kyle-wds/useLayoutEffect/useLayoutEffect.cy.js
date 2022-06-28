import App from './useLayoutEffect'

describe('useLayoutEffect', () => {
  it('should render', () => {
    cy.mount(<App />)
    cy.get('button').click()
    cy.contains(/this is a popup/i)
  })
})
