// http://localhost:3000/counter

import * as React from 'react'

function Counter() {
  const [count, setCount] = React.useState(0)
  const increment = () => setCount((c) => c + 1)
  const decrement = () => setCount((c) => c - 1)
  return (
    <div>
      <div data-cy="message">Current count: {count}</div>
      <button data-cy="decrement" onClick={decrement}>
        Decrement
      </button>
      <button data-cy="increment" onClick={increment}>
        Increment
      </button>
    </div>
  )
}

export default Counter
