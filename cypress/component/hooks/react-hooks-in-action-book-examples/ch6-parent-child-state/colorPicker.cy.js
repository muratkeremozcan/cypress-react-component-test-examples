import ColorPicker from './ColorPicker'

import './styles.css'

describe('ColorPicker', () => {
  const myColors = ['skyblue', 'goldenrod', 'teal', 'coral']

  it('should not have any color selected initially', () => {
    cy.mount(<ColorPicker colors={myColors} />)

    cy.wrap(Cypress._.range(0, 3)).each((index) =>
      cy.getByCyLike(index).should('not.have.css', 'selected')
    )
  })

  it('should have the specified color selected', () => {
    cy.mount(<ColorPicker colors={myColors} color="coral" />)

    cy.getByCyLike('coral').should('have.class', 'selected')
  })

  it('should call setColor on click', () => {
    cy.mount(
      <ColorPicker colors={myColors} setColor={cy.spy().as('setColor')} />
    )

    cy.getByCyLike('teal').click()
    cy.get('@setColor').should('have.been.called')
  })

  it('should hover', () => {
    cy.mount(<ColorPicker colors={myColors} />)

    cy.getByCyLike('0').realHover()
  })
})
