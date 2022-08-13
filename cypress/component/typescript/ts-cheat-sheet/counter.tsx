import { useReducer } from 'react'

const initialState = { count: 0 }

type ACTIONTYPE =
  | { type: 'increment'; payload: number }
  | { type: 'decrement'; payload: string }

function reducer(state: typeof initialState, action: ACTIONTYPE) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + action.payload }
    case 'decrement':
      return { count: state.count - Number(action.payload) }
    default:
      throw new Error()
  }
}

export default function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <>
      Count: {state.count}
      <button
        data-cy="-"
        onClick={() => dispatch({ type: 'decrement', payload: '5' })}
      >
        -
      </button>
      <button
        data-cy="+"
        onClick={() => dispatch({ type: 'increment', payload: 5 })}
      >
        +
      </button>
    </>
  )
}
