import * as React from 'react'
import {
  fetchPokemon,
  PokemonInfoFallback,
  PokemonForm,
  PokemonDataView,
  PokemonErrorBoundary
} from '../pokemon'
import { createResource } from '../utils'

function PokemonInfo({ pokemonResource }) {
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

// 🐨 create a SUSPENSE_CONFIG variable right here and configure timeoutMs to
// whatever feels right to you, then try it out and tweak it until you're happy
// with the experience.
const SUSPENSE_CONFIG = { timeoutMs: 4000 }

function createPokemonResource(pokemonName) {
  // 🦉 once you've finished the exercise, play around with the delay...
  // the second parameter to fetchPokemon is a delay so you can play around
  // with different timings
  let delay = 1500
  // try a few of these fetch times:
  // shows busy indicator
  // delay = 450

  // shows busy indicator, then suspense fallback
  // delay = 5000

  // shows busy indicator for a split second
  // 💯 this is what the extra credit improves
  // delay = 200
  return createResource(fetchPokemon(pokemonName, delay))
}

function App() {
  const [pokemonName, setPokemonName] = React.useState('')
  // 🐨 add a useTransition hook here
  const [isPending, startTransition] = React.useTransition(SUSPENSE_CONFIG)
  console.log({ isPending })
  const [pokemonResource, setPokemonResource] = React.useState(null)

  React.useEffect(() => {
    if (!pokemonName) {
      setPokemonResource(null)
      return
    }
    // 🐨 wrap this next line in a startTransition call
    startTransition(() => {
      setPokemonResource(createPokemonResource(pokemonName))
      // 🐨 add startTransition to the deps list here
    })
  }, [pokemonName, startTransition])

  function handleSubmit(newPokemonName) {
    setPokemonName(newPokemonName)
  }

  function handleReset() {
    setPokemonName('')
  }

  return (
    <div className="pokemon-info-app">
      <PokemonForm pokemonName={pokemonName} onSubmit={handleSubmit} />
      <hr />
      {/*
        🐨 add inline styles here to set the opacity to 0.6 if the
        useTransition above is pending
      */}
      <div style={{ opacity: isPending ? 0.6 : 1 }} className="pokemon-info">
        {pokemonResource ? (
          <PokemonErrorBoundary
            onReset={handleReset}
            resetKeys={[pokemonResource]}
          >
            <React.Suspense
              fallback={<PokemonInfoFallback name={pokemonName} />}
            >
              <PokemonInfo pokemonResource={pokemonResource} />
            </React.Suspense>
          </PokemonErrorBoundary>
        ) : (
          'Submit a pokemon'
        )}
      </div>
    </div>
  )
}

export default App

// useTransition hook can be used for an intermediate step between ErrorBoundary and Suspense
// where we can use a isPending flag to further customize the intermediate loading state
// start -> show isPending (ex: grey out) -> show suspense fallback (ex: loading... -> show final UI
