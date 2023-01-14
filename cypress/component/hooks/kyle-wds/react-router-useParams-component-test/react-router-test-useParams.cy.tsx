import { MemoryRouter, Route, Routes } from 'react-router-dom'
import { WholesalePricing } from './wholesale-pricing'
import { MountOptions, MountReturn } from 'cypress/react'

declare global {
  namespace Cypress {
    interface Chainable<Subject> {
      routeWrappedMount(
        component: React.ReactNode,
        route: string,
        path: string,
        options?: MountOptions
      ): Cypress.Chainable<MountReturn>
    }
  }
}

const routeWrappedMount = (
  WrappedComponent: React.ReactNode,
  route: string,
  path: string,
  options = {}
): Cypress.Chainable<MountReturn> => {
  window.history.pushState({}, '', route)
  const wrapped = (
    <MemoryRouter initialEntries={[route]}>
      <Routes>
        <Route element={WrappedComponent} path={path} />
      </Routes>
    </MemoryRouter>
  )
  return cy.mount(wrapped, options)
}
Cypress.Commands.add('routeWrappedMount', routeWrappedMount)

describe('WholesalePricing', () => {
  it('should render plan id and store id with a links', () => {
    const planIdStr = 'plan123'
    const storeIdStr = 'store123'
    const route = `/admin/stores/${planIdStr}/plan-and-pricing/${storeIdStr}/wholesale-pricing`
    const path = '/admin/stores/:storeId/plan-and-pricing/:planId/wholesale-pricing'

    cy.routeWrappedMount(<WholesalePricing />, route, path)

    cy.location('pathname').should('eq', route)
    cy.contains('Plan ID:')
    cy.contains('Store ID:')
    cy.findByRole('link', { name: planIdStr }).should('exist')
    cy.findByRole('link', { name: storeIdStr }).should('exist')
  })
})
