import App from './App'
import { mount } from '@cypress/react'

describe('App', () => {
  it('should render data, start and then stop erroring', () => {
    Cypress.on('uncaught:exception', () => false)
    cy.clock()
    mount(<App />)
    cy.contains('Loading message...')
    cy.tick(2000)
    cy.contains('Hello')

    cy.getByCy('next').click()
    cy.tick(2000)
    cy.contains('Bonjour')

    cy.log('**start erroring**')
    cy.getByCy('toggle').click()
    cy.getByCy('next').click()
    cy.tick(2000)
    cy.contains('Oops!')

    cy.log('**stop erroring and reset**')
    cy.getByCy('toggle').click()
    cy.getByCy('try-again').click()
    cy.tick(2000)
    cy.contains('Ciao')
  })
})
