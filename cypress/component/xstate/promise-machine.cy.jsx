// https://glebbahmutov.com/blog/negative-assertions-and-missing-states/
import { useMachine } from '@xstate/react'
import { createMachine } from 'xstate'

import './styles.css'

const promiseMachine = createMachine({
  id: 'promise',
  initial: 'pending',
  states: {
    pending: {
      on: {
        RESOLVE: { target: 'resolved' },
        REJECT: { target: 'rejected' }
      }
    },
    resolved: {
      type: 'final'
    },
    rejected: {
      type: 'final'
    }
  }
})

const Component = () => {
  const [state, send] = useMachine(promiseMachine)

  // app action in a function component
  if (window.Cypress) {
    window.state = state
  }

  return (
    <div className="app">
      <div>
        {/** You can listen to what state the service is in */}
        {state.matches('pending') && <p className="pending">pending</p>}
        {state.matches('rejected') && <p className="rejected">Rejected</p>}
        {state.matches('resolved') && <p className="resolved">Resolved</p>}
      </div>
      <div>
        {/** You can send events to the running service */}
        <button
          onClick={() => setTimeout(() => send('RESOLVE'), 100)}
          type="button"
          disabled={!state.matches('pending')}
          data-cy="resolve-btn"
          className="resolved"
        >
          Resolve
        </button>
        <button
          onClick={() => setTimeout(() => send('REJECT'), 100)}
          type="button"
          disabled={!state.matches('pending')}
          data-cy="reject-btn"
          className="rejected"
        >
          Reject
        </button>
      </div>
    </div>
  )
}

const windowState = (value) =>
  cy.window().should((window) => expect(window.state.value).to.eq(value))

Cypress.Commands.add('reachedState', (state) => {
  cy.log(`expecting **${state}** state`)
  cy.window({ log: false }).should((win) => {
    if (win.state.matches(state) !== true) {
      throw new Error(`Expected state "${state}", got "${win.state.value}"`)
    }
  })
})

describe('Promise machine', () => {
  beforeEach(() => {
    cy.mount(<Component />)

    cy.contains('p', /pending/i)
    windowState('pending')
  })

  it('should resolve', () => {
    cy.getByCy('resolve-btn').click()

    cy.contains('p', /resolved/i)
    cy.getByCy('resolve-btn').should('be.disabled')
    windowState('resolved')
  })

  it('should reject', () => {
    cy.getByCy('reject-btn').click()

    cy.contains('p', /rejected/i)
    cy.getByCy('reject-btn').should('be.disabled')
    windowState('rejected')
  })
})
