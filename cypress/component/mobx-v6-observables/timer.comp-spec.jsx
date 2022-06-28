import React from 'react'

import { Timer } from './Timer'
import { TimerView } from './timer-view'

describe('MobX v6', () => {
  context('TimerView', () => {
    it('increments every second', () => {
      const myTimer = new Timer()

      cy.mount(<TimerView timer={myTimer} />)
      cy.contains('Seconds passed: 0').then(() => {
        cy.log('we can increment the timer from outside')
        myTimer.increaseTimer()
      })

      cy.contains('Seconds passed: 1')

      cy.log('by wrapping the timer and giving it an alias')
      cy.log('we can "insert" it into the command chain')
      cy.log('using cy.get() and then invoke methods')
      cy.log('as if every command was inside .then(() => {...}) callback')

      cy.wrap(myTimer).as('timer')
      cy.get('@timer').invoke('increaseTimer')
      cy.contains('Seconds passed: 2')

      cy.get('@timer').invoke('increaseTimer')
      cy.contains('Seconds passed: 3')
      cy.get('@timer').invoke('increaseTimer')
      cy.contains('Seconds passed: 4')

      // we can also ask the timer for the current value
      cy.get('@timer').invoke('increaseTimer')
      cy.get('@timer').its('secondsPassed').should('equal', 5)
    })
  })
})
