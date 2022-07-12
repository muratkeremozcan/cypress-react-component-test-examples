import App from './app'

it('useDebugValue', () => {
  cy.mount(<App />)
  cy.get('[value="Murat"]')
  cy.get('[value="Ozcan"]')
})
