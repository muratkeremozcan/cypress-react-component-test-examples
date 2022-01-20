/// <reference types="cypress" />
import { mount } from '@cypress/react'
import FirstExample from './1.FirstExample'

describe('FirstExample', () => {
  it('should show an error when an empty form is submitted', () => {
    mount(<FirstExample />)
    cy.get('span').should('not.exist')
    cy.getByCy('submit').click()
    cy.contains('span', 'Name is required')
  })
})
