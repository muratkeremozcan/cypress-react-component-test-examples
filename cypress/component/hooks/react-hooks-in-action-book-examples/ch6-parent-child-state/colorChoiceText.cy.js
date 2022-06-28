import ColorChoiceText from './ColorChoiceText'

describe('ColorChoiceText', () => {
  it('shows no color text', () => {
    cy.mount(<ColorChoiceText />)
    cy.contains('No color')
  })
  it('shows color text', () => {
    cy.mount(<ColorChoiceText color="red" />)
    cy.contains('color is red')
  })
})
