import App from './styling'

describe('We cam render styles with className and style prop', () => {
  beforeEach(() => cy.mount(<App />))
  it('should render a component with plain props {...props} : prototype', () => {
    cy.getByCy('prototype')
      .should('have.class', 'box box--small')
      .and('have.css', 'background-color', 'rgb(173, 216, 230)')
      .contains('prototype')
  })

  it('should render components with className + style prop', () => {
    cy.getByCy('small lightblue box')
      .should('have.class', 'box box--small')
      .should('have.css', 'background-color', 'rgb(173, 216, 230)')
      .contains('small lightblue box')

    cy.getByCy('medium pink box')
      .should('have.class', 'box box--medium')
      .should('have.css', 'background-color', 'rgb(255, 192, 203)')
      .contains('medium pink box')

    cy.getByCy('large orange box')
      .should('have.class', 'box box--large')
      .should('have.css', 'background-color', 'rgb(255, 165, 0)')
      .contains('large orange box')
  })

  it('should render a sizeless box', () => {
    cy.getByCy('sizeless box').should('have.class', 'box')
  })
})
