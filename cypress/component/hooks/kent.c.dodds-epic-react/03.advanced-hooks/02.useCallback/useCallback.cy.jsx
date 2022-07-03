import App from './useCallback'
import { ErrorBoundary } from 'react-error-boundary'

import './styles.css'

describe('Pokemon api', () => {
  beforeEach(() => {
    cy.intercept('POST', /pokemon/).as('fetchPokemon')

    cy.mount(
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    )
  })

  function getPokemon(pokemonName) {
    cy.get('#pokemonName-input').type(pokemonName)
    cy.get('div > button').click(0)
  }

  it('should get a valid pokemon', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
      return false
    })

    getPokemon('charmander')
    cy.wait('@fetchPokemon').its('response.statusCode').should('eq', 200)
  })

  it('should error for a non-existing pokemon', () => {
    // Error boundaries do not stop an uncaught error from propagating.
    // Cypress will fail on uncaught exceptions by default, so we need to suppress that behavior.
    cy.on('uncaught:exception', (err) => {
      // Assert that we are only suppressing the default behavior for the error we expect.
      expect(err.message.includes('No pokemon with the name')).to.be.true
      return false
    })

    getPokemon('murat')
    cy.wait('@fetchPokemon').its('response.statusCode').should('eq', 200)
    cy.contains('There was an error')

    cy.get('.pokemon-info > div > button').click()
    cy.get('.pokemon-info').contains('Submit a pokemon')
  })
})
