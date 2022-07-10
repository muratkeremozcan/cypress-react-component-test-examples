import ColorSample from './ColorSample'

import './styles.css'

const checkColor = (color) =>
  cy.getByCy('color-sample').should('have.css', 'background-color', color)

describe('ColorSample', () => {
  it('should sample red', () => {
    cy.mount(<ColorSample color="red" />)
    // maybe it's better to leave the css check to the parent?
    checkColor('rgb(255, 0, 0)')
    // here's  lower level way
    cy.getByCy('color-sample')
      .getComponent()
      .its('props.color')
      .should('eq', 'red')
  })

  it('should sample blue', () => {
    cy.mount(<ColorSample color="blue" />)
    checkColor('rgb(0, 0, 255)')

    cy.getByCy('color-sample')
      .getComponent()
      .its('props.color')
      .should('eq', 'blue')
  })

  it('should sample no color without a prop', () => {
    cy.mount(<ColorSample />)
    cy.getByCy('color-sample').should('not.exist')
  })
})
