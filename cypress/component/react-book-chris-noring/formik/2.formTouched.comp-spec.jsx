/// <reference types="cypress" />
import { mount } from '@cypress/react'
import FormTouched from './2.FormTouched'

describe('FormTouched', () => {
  it('should show errors when an empty form is submitted', () => {
    mount(<FormTouched />)
    cy.get('span').should('not.exist')
    cy.getByCy('submit').click()
    cy.contains('Name is required')
    cy.contains('Address is required')

    cy.get('input').each((field) => cy.wrap(field).type('a'))
    cy.contains('is required').should('not.exist')
  })
})
