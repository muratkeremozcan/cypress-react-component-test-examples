import App from './App'

import './styles.css'
import { recurse } from 'cypress-recurse'

// unreliable in CI, so skip it
describe.skip('App', { viewportHeight: 1000 }, () => {
  it('should', () => {
    cy.mount(<App />)

    cy.getByCy('image').should('have.length', 10)

    // https://www.youtube.com/watch?v=KHn7647xOz8
    recurse(
      () => cy.window({ log: false }).its('scrollY', { log: false }),
      (yAxis) => yAxis >= 200,
      {
        log: true,
        limit: 50,
        timeout: 10000,
        delay: 300,
        post() {
          cy.scrollTo('bottom', { log: false })
        }
      }
    )
    cy.getByCy('image').last().should('be.visible')

    cy.log('**use the hook to lock scrolling**"')
    cy.get('button').click()
    cy.get('.modal').should('be.visible')

    // use this when ready? https://github.com/dmtrKovalenko/cypress-real-events/pull/178/files/c7cf06d3d8ccfd3af8050be2bac661579c4944fa
  })
})
