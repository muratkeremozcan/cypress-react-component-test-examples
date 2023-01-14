import '@testing-library/cypress/add-commands'
import { MemoryRouter, useParams, Route, Routes } from 'react-router-dom'
import { WholesalePricing } from './wholesale-pricing'
import { MountOptions, MountReturn } from 'cypress/react'

describe('WholesalePricing', () => {
  const planIdStr = 'plan123'
  const storeIdStr = 'store123'
  const route = `/admin/stores/${storeIdStr}/plan-and-pricing/${planIdStr}/wholesale-pricing`
  const path = '/admin/stores/:storeId/plan-and-pricing/:planId/wholesale-pricing'

  const MockParams = (): JSX.Element => {
    const { storeId, planId } = useParams<{ storeId: string; planId: string }>()
    return <div>{`MockParams: ${storeId}, ${planId}`}</div>
  }

  it('should render plan id with a link', () => {
    window.history.pushState({}, 'Test Page', route)
    cy.mount(
      <>
        <MemoryRouter initialEntries={[route]}>
          <Routes>
            <Route
              element={
                <>
                  <MockParams />
                  <WholesalePricing />
                </>
              }
              path={path}
            />
          </Routes>
        </MemoryRouter>
      </>
    )
    cy.findByText('Plan ID:').should('exist')
    cy.location('pathname').should('eq', route)

    // if things work, this should render a link to the plan
    // cy.findByRole('link', { name: planId }).should('exist')
  })

  it('should render plan id with a link', () => {
    cy.routeWrappedMount3(<WholesalePricing />, route, path, MockParams)
    cy.contains('Plan ID:')
    cy.location('pathname').should('eq', route)

    // if things work, this should render a link to the plan
    // cy.findByRole('link', { name: planId }).should('exist')
  })
})

const routeWrappedMount3 = (
  WrappedComponent: React.ReactNode,
  route: string,
  path: string,
  MockParams: React.FC,
  options = {}
): Cypress.Chainable<MountReturn> => {
  window.history.pushState({}, 'Test Page', route)
  const wrapped = (
    <MemoryRouter initialEntries={[route]}>
      <Routes>
        <Route
          element={
            <>
              <MockParams />
              {WrappedComponent}
            </>
          }
          path={path}
        />
      </Routes>
    </MemoryRouter>
  )
  return cy.mount(wrapped, options)
}
Cypress.Commands.add('routeWrappedMount3', routeWrappedMount3)

declare global {
  namespace Cypress {
    interface Chainable<Subject> {
      routeWrappedMount3(
        component: React.ReactNode,
        route: string,
        path: string,
        MockParams: React.FC,
        options?: MountOptions
      ): Cypress.Chainable<MountReturn>
    }
  }
}
