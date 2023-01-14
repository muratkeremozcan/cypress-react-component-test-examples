import App from './app'
import { MemoryRouter, useParams, Route, Routes } from 'react-router-dom'
import { MountOptions, MountReturn } from 'cypress/react'

const routeWrappedMount2 = (
  WrappedComponent: React.ReactNode,
  route: string,
  path: string,
  MockParams: React.FC,
  options = {}
): Cypress.Chainable<MountReturn> => {
  const wrapped = (
    <MemoryRouter initialEntries={[route]}>
      <Routes>
        <Route element={<MockParams />} path={path} />
      </Routes>
      {WrappedComponent}
    </MemoryRouter>
  )
  return cy.mount(wrapped, options)
}
Cypress.Commands.add('routeWrappedMount2', routeWrappedMount2)

declare global {
  namespace Cypress {
    interface Chainable<Subject> {
      routeWrappedMount2(
        component: React.ReactNode,
        route: string,
        path: string,
        MockParams: React.FC,
        options?: MountOptions
      ): Cypress.Chainable<MountReturn>
    }
  }
}

describe('test useParams with custom command', () => {
  it('should navigate to /books', () => {
    const MockParams = () => {
      const { books } = useParams()
      return <div>{`pathParam: /${books}`}</div>
    }
    cy.routeWrappedMount2(<App />, '/books', '/:books', MockParams)
    cy.getByCy('sidebar').should('be.visible')

    cy.contains('pathParam: /books')
  })

  it.only('books/1', () => {
    const MockParams = () => {
      const { id } = useParams()
      return <div>{`pathParam: /${id}`}</div>
    }
    cy.routeWrappedMount2(<App />, '/books/1', 'books/:id', MockParams)
    cy.getByCy('sidebar').should('not.exist')
    cy.contains('h1', 'Book 1')
    cy.contains('pathParam: /1')
  })

  it('books/2', () => {
    const MockParams = () => {
      const { id } = useParams()
      return <div>{`pathParam: /${id}`}</div>
    }
    cy.routeWrappedMount2(<App />, '/books/2', 'books/:id', MockParams)
    cy.getByCy('sidebar').should('not.exist')
    cy.contains('h1', 'Book 2')
    cy.contains('pathParam: /2')
  })

  it('books/new', () => {
    const MockParams = () => {
      const { id } = useParams()
      return <div>{`pathParam: /${id}`}</div>
    }
    cy.routeWrappedMount2(<App />, '/books/new', 'books/:id', MockParams)
    cy.getByCy('sidebar').should('not.exist')
    cy.contains('h1', 'New Book')
    cy.contains('pathParam: /new')
  })
})
