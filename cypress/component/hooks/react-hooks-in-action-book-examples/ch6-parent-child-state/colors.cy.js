import Colors from './Colors'

import './styles.css'

describe('Colors', () => {
  it('should render children', () => {
    cy.mount(<Colors />)
    cy.getByCyLike('teal').click()

    cy.contains('color is teal')
    cy.getByCyLike('sample').should(
      'have.css',
      'background-color',
      'rgb(0, 128, 128)'
    )
  })
})
