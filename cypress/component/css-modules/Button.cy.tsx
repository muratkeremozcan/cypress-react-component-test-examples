import Button from './Button'

describe('Button', () => {
  it('should render primary button styles', () => {
    cy.mount(<Button type="primary" label="prim" />)
    cy.get('button')
      .should('have.css', 'background-color', 'rgb(110, 85, 226)')
      .and('have.css', 'color', 'rgb(204, 255, 170)')
  })

  it('should render secondary button styles', () => {
    cy.mount(<Button type="secondary" label="2nd" />)
    cy.get('button')
      .should('have.css', 'background-color', 'rgb(171, 255, 238)')
      .and('have.css', 'color', 'rgb(110, 17, 226)')
  })
})
