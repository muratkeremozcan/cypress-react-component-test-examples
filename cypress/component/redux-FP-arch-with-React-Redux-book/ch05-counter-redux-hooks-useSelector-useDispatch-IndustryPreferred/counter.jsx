import * as React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { INCREMENT, DECREMENT } from './reducer'

// this approach diverges from using redux-actions,
// and instead makes the original setup from ch04 easier

export default function Counter() {
  const counter = useSelector((state) => state.counter)

  const dispatch = useDispatch()
  const increment = () => dispatch({ type: INCREMENT })
  const decrement = () => dispatch({ type: DECREMENT })

  return (
    <div>
      <div>{counter}</div>
      <button data-cy="-" onClick={decrement}>
        -
      </button>
      <button data-cy="+" onClick={increment}>
        +
      </button>
    </div>
  )
}
