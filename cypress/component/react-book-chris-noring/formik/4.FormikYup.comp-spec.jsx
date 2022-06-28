/// <reference types="cypress" />

import FormikYup from './4.FormikYup'

// note toString takes a radix param, the "base" in which the integer is translated to string.
// let a = 5; a.toString(2) will be 101; https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toString

/** Generates a random by string by length */
const generateString = (length) =>
  Cypress._.times(length, () => Cypress._.random(35).toString(36)).join('')

describe('FormikYup', () => {
  it('should validate form schema', () => {
    cy.mount(<FormikYup />)

    cy.getByCy('submit').click()

    cy.get('input').each((field, index) => {
      cy.contains(field.text(), /is required$/)

      cy.wrap(field).type(generateString(1), { delay: 0 })
      cy.contains(field.text(), 'Too short')

      cy.wrap(field).clear().type(generateString(51), { delay: 0 })
      cy.contains(field.text(), 'Too long')

      // cy.contains(field.text(), /^$/) // not a good way to check empty string here
      // use this function instead
      const shouldNotIncludeText = (text) =>
        cy
          .get(`form > :nth-child(${index + 1})`)
          .should('not.include.text', text)

      cy.wrap(field).clear().type(generateString(2), { delay: 0 })
      shouldNotIncludeText('Too short')

      cy.wrap(field).clear().type(generateString(50), { delay: 0 })
      shouldNotIncludeText('Too long')
    })
  })
})
