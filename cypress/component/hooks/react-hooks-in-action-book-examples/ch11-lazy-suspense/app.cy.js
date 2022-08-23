import App from './App'

import './styles.css'

describe('App', { viewportHeight: 1000, viewportWidth: 1000 }, () => {
  it('clicking the 2nd lazy component should immediately load', () => {
    cy.mount(<App />)

    cy.getByCy('show-dog').first().click()
    cy.contains(':nth-child(1) > h1', 'Samoyed')

    cy.getByCy('show-dog').last().click()
    cy.get('aside > :nth-child(2)').should('not.contain', 'Loading...')
    cy.contains(':nth-child(2) > h1', 'Samoyed')
  })
})
