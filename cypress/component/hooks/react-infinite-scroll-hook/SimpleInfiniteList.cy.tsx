import SimpleInfiniteList from './SimpleInfiniteList'
import { recurse } from 'cypress-recurse'

// @ts-ignore
describe('InfiniteListSimple', { viewportHeight: 800 }, () => {
  it('should render items lower down the infinite list', () => {
    cy.mount(<SimpleInfiniteList />)
    cy.getByCyLike('list-item-19').should('be.visible')

    const itemId = '60'

    recurse(
      () =>
        cy
          .getByCy(`list-item-${itemId}`, { log: false })
          .should(Cypress._.noop),
      ($item) => $item.text().includes(itemId),
      {
        log: false,
        limit: 50,
        timeout: 20000,
        delay: 1000,
        post() {
          cy.scrollTo('bottom', { log: false })
        }
      }
    )
      .scrollIntoView()
      .invoke('css', 'border', '2px solid red')
  })
})
