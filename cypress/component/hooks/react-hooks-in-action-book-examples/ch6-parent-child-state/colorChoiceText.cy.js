import { mount } from '@cypress/react'
import ColorChoiceText from './ColorChoiceText'

describe('ColorChoiceText', () => {
  it('shows no color text', () => {
    mount(<ColorChoiceText />)
    cy.contains('No color')
  })
  it('shows color text', () => {
    mount(<ColorChoiceText color="red" />)
    cy.contains('color is red')
  })
})
