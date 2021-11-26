import React, { useState, useCallback } from 'react'

export default function CounterWithHooks({ initialCount = 0 }) {
  const [count, setCount] = useState(initialCount)

  const handleCountIncrement = useCallback(
    () => setCount(count + 1),
    [count] // needed for memoization
  )

  return (
    <>
      <div className="counter">You clicked {count} times</div>
      <button id="increment" onClick={handleCountIncrement}>
        +
      </button>
    </>
  )
}
