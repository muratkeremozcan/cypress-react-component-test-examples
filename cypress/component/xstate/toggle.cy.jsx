import { useMachine } from '@xstate/react'
import { createMachine } from 'xstate'

const toggleMachine = createMachine({
  id: 'toggle',
  initial: 'inactive',
  states: {
    inactive: {
      on: { TOGGLE: 'active' }
    },
    active: {
      on: { TOGGLE: 'inactive' }
    }
  }
})
export const Toggler = () => {
  const [state, send] = useMachine(toggleMachine)

  return (
    <button onClick={() => send('TOGGLE')}>
      {state.value === 'inactive'
        ? 'Click to activate'
        : 'Active! Click to deactivate'}
    </button>
  )
}

describe('toggle', () => {
  it('should toggle the states', () => {
    cy.mount(<Toggler />)
    cy.get('button')
      .contains('Click to activate')
      .click()
      .contains('Active! Click to deactivate')
      .click()
      .contains('Click to activate')
  })
})
