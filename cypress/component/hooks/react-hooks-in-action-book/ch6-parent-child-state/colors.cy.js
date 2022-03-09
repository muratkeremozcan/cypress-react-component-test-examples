import Colors from './Colors'
import { mount } from '@cypress/react'
import './styles.css'

describe('Colors', () => {
  it('should render children', () => {
    mount(<Colors />)
    cy.getByCyLike('teal').click()

    cy.contains('color is teal')
    cy.getByCyLike('sample').should(
      'have.css',
      'background-color',
      'rgb(0, 128, 128)'
    )
  })
})
