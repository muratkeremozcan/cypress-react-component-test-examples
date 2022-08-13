import App from './useTransition'

// TODO: try again with React 18 support in Cypress
it.skip(
  'suspense, data fetching, error boundary',
  { viewportHeight: 600 },
  () => {
    cy.intercept('POST', 'https://graphql-pokemon2.vercel.app/', (req) =>
      req.reply({
        body: {
          data: {
            pokemon: {
              id: 'UG9rZW1vbjowMjU=',
              number: '025',
              name: 'Pikachu',
              image: 'https://img.pokemondb.net/artwork/pikachu.jpg',
              attacks: {
                special: [
                  { name: 'Discharge', type: 'Electric', damage: 35 },
                  { name: 'Thunder', type: 'Electric', damage: 100 },
                  { name: 'Thunderbolt', type: 'Electric', damage: 55 }
                ]
              }
            }
          }
        }
      })
    ).as('pika')
    cy.mount(<App />)

    cy.getByCy('loading').should('exist')
    cy.wait('@pika', { timeout: 15000 })
    cy.getByCy('pokemon-info').should('be.visible')
  }
)
