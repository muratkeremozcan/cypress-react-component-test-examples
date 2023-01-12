import App from './app'
import { useSearchParams, MemoryRouter, Routes, Route, useParams } from 'react-router-dom'
import { MountOptions, MountReturn } from 'cypress/react'

function RenderSearchParams() {
  const [searchParams] = useSearchParams()
  console.log(searchParams) //?
  const paramsObj = Object.fromEntries(searchParams.entries())

  return (
    <div id="search-params">
      {Object.keys(paramsObj).map((key) => (
        <span id={`${key}:${paramsObj[key]}`} />
      ))}
    </div>
  )
}

const routeWrappedMount = (
  WrappedComponent: React.ReactNode,
  route: string,
  options = {}
): Cypress.Chainable<MountReturn> => {
  const wrapped = (
    <MemoryRouter initialEntries={[route]}>
      <RenderSearchParams />
      {WrappedComponent}
    </MemoryRouter>
  )
  return cy.mount(wrapped, options)
}
Cypress.Commands.add('routeWrappedMount', routeWrappedMount)

declare global {
  namespace Cypress {
    interface Chainable<Subject> {
      routeWrappedMount(
        component: React.ReactNode,
        route: string,
        options?: MountOptions
      ): Cypress.Chainable<MountReturn>
    }
  }
}

it.only('test useParams with custom command', () => {
  // window.history.pushState({}, null, '/books') // we should not need this
  cy.routeWrappedMount(<App />, '/books')
  cy.location('pathname').should('equal', '/books')
})
