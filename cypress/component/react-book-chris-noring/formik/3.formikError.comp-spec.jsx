/// <reference types="cypress" />

import FormikError from './3.FormikError'

describe('FormikError', () => {
  it('should show errors when an empty form is submitted', () => {
    cy.mount(<FormikError />)
    cy.get('span').should('not.exist')
    cy.getByCy('submit').click()
    cy.contains('Name is required')
    cy.contains('Address is required')
    cy.contains('Email is required')

    cy.get('input').each((field) => cy.wrap(field).type('a'))
    cy.contains('is required').should('not.exist')
  })
})
