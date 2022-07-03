import Counter from './useReducer'

describe('useReducer', () => {
  it('should increment and decrement the counter', () => {
    cy.mount(<Counter />)
    cy.getByCy('count').contains('0')

    cy.getByCy('-').dblclick()
    cy.getByCy('count').contains('-2')

    cy.getByCy('+').dblclick().dblclick()
    cy.getByCy('count').contains('2')
  })

  it('should render with custom initialCount then increment & decrement with custom step', () => {
    cy.mount(<Counter initialCount={-6} step={3} />)
    cy.getByCy('count').contains('-6')

    cy.getByCy('+').dblclick()
    cy.getByCy('count').contains('0')
  })
})
