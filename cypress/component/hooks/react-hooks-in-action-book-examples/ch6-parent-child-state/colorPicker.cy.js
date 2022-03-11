import ColorPicker from './ColorPicker'
import { mount } from '@cypress/react'
import './styles.css'

describe('ColorPicker', () => {
  const myColors = ['skyblue', 'goldenrod', 'teal', 'coral']

  it('should not have any color selected initially', () => {
    mount(<ColorPicker colors={myColors} />)

    cy.wrap(Cypress._.range(0, 3)).each((index) =>
      cy.getByCyLike(index).should('not.have.css', 'selected')
    )
  })

  it('should have the specified color selected', () => {
    mount(<ColorPicker colors={myColors} color="coral" />)

    cy.getByCyLike('coral').should('have.class', 'selected')
  })

  it('should call setColor on click', () => {
    mount(<ColorPicker colors={myColors} setColor={cy.spy().as('setColor')} />)

    cy.getByCyLike('teal').click()
    cy.get('@setColor').should('have.been.called')
  })

  it('should hover', () => {
    mount(<ColorPicker colors={myColors} />)

    // question to D.Kovalenko: why does the next index get hovered on?
    cy.getByCyLike('0').realHover()
  })
})
