import App from './App'
import { mount } from '@cypress/react'
import './styles.css'

describe('App', { viewportHeight: 1000, viewportWidth: 1000 }, () => {
  it('clicking the 2nd lazy component should immediately load', () => {
    mount(<App />)

    cy.getByCy('show-dog').first().click()
    cy.get('aside > :nth-child(1)').contains('Loading...')
    cy.contains(':nth-child(1) > h1', 'Samoyed')

    cy.getByCy('show-dog').last().click()
    cy.get('aside > :nth-child(2)').should('not.contain', 'Loading...')
    cy.contains(':nth-child(2) > h1', 'Samoyed')
  })
})
