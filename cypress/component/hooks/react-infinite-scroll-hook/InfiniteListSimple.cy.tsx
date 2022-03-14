import { mount } from '@cypress/react'
import SimpleInfiniteList from './InfiniteListSimple'
import { recurse } from 'cypress-recurse'

describe('InfiniteListSimple', () => {
  it('should render an item down in the list', { viewportHeight: 800 }, () => {
    mount(<SimpleInfiniteList />)
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
        limit: 20,
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
