// [1] Suspense and Error Boundary
// React provides an easy way to specify fallback UI: the Suspense component
// use the Suspense component to wrap UI that contains one or components that load data
// Error boundary is a way for the app to show common error when data fails to load

import * as React from 'react'
import { fetchPokemon, PokemonDataView, PokemonErrorBoundary } from '../pokemon'

let pokemonResource = createResource(fetchPokemon('pikachu'))

function createResource(promise) {
  let status = 'pending'
  let result = promise.then(
    (resolved) => {
      status = 'success'
      result = resolved
    },
    (rejected) => {
      status = 'error'
      result = rejected
    }
  )
  return {
    read() {
      if (status === 'pending') throw result
      if (status === 'error') throw result
      if (status === 'success') return result
      throw new Error('This should be impossible')
    }
  }
}

function PokemonInfo() {
  const pokemon = pokemonResource.read()
  return (
    <div data-cy="pokemon-info">
      <div className="pokemon-info__img-wrapper">
        <img src={pokemon.image} alt={pokemon.name} />
      </div>
      <PokemonDataView pokemon={pokemon} />
    </div>
  )
}

function App() {
  return (
    <div className="pokemon-info-app">
      <div className="pokemon-info">
        <PokemonErrorBoundary>
          <React.Suspense
            fallback={<div data-cy="loading">Loading Pokemon...</div>}
          >
            <PokemonInfo />
          </React.Suspense>
        </PokemonErrorBoundary>
      </div>
    </div>
  )
}

export default App
