/// <reference types="cypress" />
import { mount } from '@cypress/react'
import FormikError from './3.FormikError'

describe('FormikError', () => {
  it('should show an error when an empty form is submitted', () => {
    mount(<FormikError />)
    cy.getByCy('save').click()
    cy.contains('First name is required')
    cy.contains('Last name is required')
    cy.contains('Email is required')

    cy.get('input').each((field) => cy.wrap(field).type('a'))
    cy.contains('is required').should('not.exist')
  })
})
