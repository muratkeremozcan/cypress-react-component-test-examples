import App from './App'
import { mount } from '@cypress/react'

function compareTimers(secondsPassed = 0) {
  cy.getByCy('timer').contains(secondsPassed)
  cy.getByCy('custom-timer').contains(secondsPassed)
}

describe('useEffect twice', () => {
  it('the timers should stay in sync', () => {
    cy.clock()
    mount(<App />)
    compareTimers(0)

    cy.tick(5000)
    compareTimers(5)

    cy.tick(10000)
    compareTimers(15)
  })
})
