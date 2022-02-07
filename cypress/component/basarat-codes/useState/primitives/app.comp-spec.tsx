import App from './App'
import { mount } from '@cypress/react'

describe('App', () => {
  it('should render', () => {
    mount(<App />)

    cy.getByCy('count').should('contain', '0').click().should('contain', '2')
  })
})
