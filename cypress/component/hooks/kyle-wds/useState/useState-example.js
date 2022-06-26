// https://www.youtube.com/watch?v=O6P86uwfdR0&list=WL&index=39
import { useState } from 'react'

export default function App() {
  // useState can take a fn as an argument which runs once on mount
  // used for initial, costly calculations for initial state, so that they don't repeat on setState
  const [count, setCount] = useState(() => {
    console.log('run the fn')
    return 0
  })

  // setState can take a fn as an argument to track the previous state
  const increment = () => setCount((prevCount) => prevCount - 1)
  const decrement = () => setCount((prevCount) => prevCount + 1)

  return (
    <>
      <button data-cy="-" onClick={decrement}>
        -
      </button>
      <span data-cy="count">{count}</span>
      <button data-cy="+" onClick={increment}>
        +
      </button>
    </>
  )
}
