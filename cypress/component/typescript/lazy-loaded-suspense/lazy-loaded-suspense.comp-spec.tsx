import * as React from 'react'
import { LazyComponent } from './LazyComponent'

describe('React.lazy component with <Suspense />', () => {
  it('renders and retries till component is loaded', () => {
    cy.viewport(1000, 1000)
    cy.mount(<LazyComponent />)
    cy.contains('loading...')
    cy.contains('Your dog is')
  })
})
