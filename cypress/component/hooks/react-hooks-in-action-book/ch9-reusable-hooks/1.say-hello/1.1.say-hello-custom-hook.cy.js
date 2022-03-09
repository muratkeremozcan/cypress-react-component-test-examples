import { mount } from '@cypress/react'
import SayHello from './1.1.say-hello-custom-hook'

it('useEffect should change document.title', () => {
  mount(<SayHello />)
  cy.spy(Math, 'floor').as('updateGreeting')

  Cypress._.times(2, () => {
    cy.get('button').click()

    cy.get('@updateGreeting').should('be.called')
    cy.document()
      .its('title')
      .should('be.oneOf', ['Hello', 'Ciao', 'Hola', 'こんにちは'])
  })
})
