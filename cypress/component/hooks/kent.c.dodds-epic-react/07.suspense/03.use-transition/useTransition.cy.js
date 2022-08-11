import App from './useTransition'

it('suspense, data fetching, error boundary', { viewportHeight: 600 }, () => {
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

  cy.get('small > :nth-child(1)').click()

  cy.getByCy('loading').should('be.visible')
  cy.wait('@pika', { timeout: 15000 })
  cy.getByCy('pokemon-info').should('be.visible')
})
