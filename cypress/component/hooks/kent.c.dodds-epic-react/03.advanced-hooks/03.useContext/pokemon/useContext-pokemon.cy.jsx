import App from './useContext-pokemon'

import './styles.css'

describe('Pokemon api', () => {
  beforeEach(() => {
    cy.intercept('POST', /pokemon/).as('fetchPokemon')

    cy.mount(<App />)
  })

  function getPokemon(pokemonName) {
    cy.get('#pokemonName-input').clear().type(pokemonName)
    cy.get('div > button').click(0)
  }

  it('should get populate a pokemon list', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
      return false
    })

    const pokemons = ['charmander', 'bulbasaur', 'squirtle']

    cy.wrap(pokemons).each((pokemonName) => {
      getPokemon(pokemonName)
      cy.wait('@fetchPokemon').its('response.statusCode').should('eq', 200)
    })

    pokemons.map((pokemon) => cy.getByCy('previous-pokemon').contains(pokemon))
  })
})
