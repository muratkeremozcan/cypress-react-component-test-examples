// https://glebbahmutov.com/blog/negative-assertions-and-missing-states/
import { useMachine } from '@xstate/react'
import { createMachine } from 'xstate'

import './styles.css'

export const loadingMachine = createMachine({
  id: 'loading',
  initial: 'pending',
  states: {
    pending: {
      on: {
        LOAD: {
          target: 'loading'
        }
      }
    },
    loading: {
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
  const [state, send] = useMachine(loadingMachine)

  // app action in a function component
  if (window.Cypress) {
    window.state = state
  }

  return (
    <div className="app">
      <div>
        {/** You can listen to what state the service is in */}
        {state.matches('pending') && <p className="pending">pending</p>}
        {state.matches('loading') && <p className="loading">loading</p>}
        {state.matches('rejected') && <p className="rejected">Rejected</p>}
        {state.matches('resolved') && <p className="resolved">Resolved</p>}
        current state: {state.value}
      </div>
      <div>
        {/** You can send events to the running service */}
        <button
          onClick={() => send('RESOLVE')}
          type="button"
          disabled={!state.matches('pending')}
          data-cy="resolve-btn"
          className="resolved"
        >
          Resolve
        </button>
        <button
          onClick={() => send('REJECT')}
          type="button"
          disabled={!state.matches('pending')}
          data-cy="reject-btn"
          className="rejected"
        >
          Reject
        </button>

        <button
          onClick={() => send('LOAD')}
          type="button"
          data-cy="resolve-btn"
          className="loading"
        >
          Tap
        </button>
      </div>
    </div>
  )
}

describe('Loading machine', () => {
  it('should resolve', () => {
    cy.mount(<Component />)
    // stays pending... doesn't fall over to loading
  })
})
