import ProductDetails from './ProductDetails'
import { formatCurrency } from '../utils/formatCurrency'
import products from '../fixtures/products.json'
import { Provider } from 'react-redux'
import { MemoryRouter, Routes, Route } from 'react-router-dom'
import { store } from '../redux/store'
const product = products[0]

const routeWrappedMount = (
  WrappedComponent: React.ReactNode,
  route: string,
  path: string,
  customStore = store,
  options = {}
) => {
  window.history.pushState({}, '', route)
  const wrapped = (
    <Provider store={customStore}>
      <MemoryRouter initialEntries={[route]}>
        <Routes>
          <Route element={WrappedComponent} path={path} />
        </Routes>
      </MemoryRouter>
    </Provider>
  )
  return cy.mount(wrapped, options)
}

describe('ProductDetails', () => {
  it('should display product details', () => {
    const { id, name, retail, isAvailable } = product
    const route = `/${id}`
    const path = '/:id'

    cy.intercept(
      {
        method: 'GET',
        pathname: `/api/v1/products/${id}`
      },
      { body: product, delay: 100 }
    ).as('getProduct')

    routeWrappedMount(<ProductDetails />, route, path)
    cy.getByCy('Spinner').should('be.visible')
    cy.wait('@getProduct')

    cy.contains(name)
    cy.contains(formatCurrency(retail))
    if (isAvailable) {
      cy.contains('Yes')
    } else {
      cy.contains('No')
    }

    cy.contains('[href="/products"]', 'Back to list')
  })
})
