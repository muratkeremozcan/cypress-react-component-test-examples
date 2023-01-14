import App from './app'
import { MemoryRouter, useParams, Route, Routes } from 'react-router-dom'
import { MountOptions, MountReturn } from 'cypress/react'

const routeWrappedMount = (
  WrappedComponent: React.ReactNode,
  route: string,
  options = {}
): Cypress.Chainable<MountReturn> => {
  const MockParams = () => {
    const { id } = useParams()
    return <div>{`pathParam: /${id}`}</div>
  }

  const wrapped = (
    <MemoryRouter initialEntries={[route]}>
      <Routes>
        <Route element={<MockParams />} path="/:id" />
      </Routes>
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

describe('test useParams with custom command', () => {
  it('should navigate to /books', () => {
    // window.history.pushState({}, null, '/books') // we do not need this

    // all we need to do is to mount the component with the custom command
    cy.routeWrappedMount(<App />, '/books')

    // you will not get the url without the history.pushState, but useParams will work
    // cy.location('pathname').should('equal', '/books')

    // we can prove that things are working for the app
    cy.getByCy('sidebar').should('be.visible')
  })

  it('books/1', () => {
    cy.routeWrappedMount(<App />, '/books/1')
    cy.getByCy('sidebar').should('not.exist')
    cy.contains('h1', 'Book 1')
  })

  it('books/2', () => {
    cy.routeWrappedMount(<App />, '/books/2')
    cy.getByCy('sidebar').should('not.exist')
    cy.contains('h1', 'Book 2')
  })

  it('books/new', () => {
    cy.routeWrappedMount(<App />, '/books/new')
    cy.getByCy('sidebar').should('not.exist')
    cy.contains('h1', 'New Book')
  })
})
