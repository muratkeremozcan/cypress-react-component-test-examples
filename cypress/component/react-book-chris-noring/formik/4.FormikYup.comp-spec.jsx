/// <reference types="cypress" />
import { mount } from '@cypress/react'
import FormikYup from './4.FormikYup'

// note toString takes a radix param, the "base" in which the integer is translated to string.
// let a = 5; a.toString(2) will be 101; https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toString

/** Generates a random by string by length */
const generateString = (length) =>
  Cypress._.times(length, () => Cypress._.random(35).toString(36)).join('')

describe('FormikYup', () => {
  it('should validate form schema', () => {
    mount(<FormikYup />)

    cy.getByCy('submit').click()

    cy.get('input').each((field) => {
      cy.contains(field.text(), /is required$/)

      cy.wrap(field).type(generateString(1), { delay: 0 })
      cy.contains(field.text(), 'Too short')

      cy.wrap(field).clear().type(generateString(51), { delay: 0 })
      cy.contains(field.text(), 'Too long')

      cy.wrap(field).clear().type(generateString(2), { delay: 0 })
      cy.contains(field.text(), /^$/)

      cy.wrap(field).clear().type(generateString(51), { delay: 0 })
      cy.contains(field.text(), /^$/)
    })
  })
})
