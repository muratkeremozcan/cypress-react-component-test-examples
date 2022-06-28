import InfiniteListWithReverseVerticalScroll from './InfiniteListWithReverseVerticalScroll'
import { recurse } from 'cypress-recurse'

// @ts-ignore
describe('ReverseVerticalScroll', { viewportWidth: 600 }, () => {
  it('should render items lower down the infinite list', () => {
    cy.mount(<InfiniteListWithReverseVerticalScroll />)
    cy.getByCyLike('list-item-10').should('be.visible')

    const itemId = '30'

    recurse(
      () =>
        cy
          .getByCy(`list-item-${itemId}`, { log: false })
          .should(Cypress._.noop),
      ($item) => $item.text().includes(itemId),
      {
        log: false,
        limit: 10,
        timeout: 10000,
        delay: 1000,
        post() {
          cy.getByCy('list-container').scrollTo('top', { log: false })
        }
      }
    )
      .scrollIntoView()
      .invoke('css', 'border', '2px solid red')
  })
})
