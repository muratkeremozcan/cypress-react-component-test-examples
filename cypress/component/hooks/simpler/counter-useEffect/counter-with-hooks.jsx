// example from https://reactjs.org/docs/hooks-overview.html
import React, { useState, useEffect, useCallback } from 'react'

export default function CounterWithHooks({ initialCount = 0 }) {
  const [count, setCount] = useState(initialCount)

  useEffect(() => {
    document.title = `You clicked ${count} times while using effect`
  })

  const handleCountIncrement = useCallback(
    () => setCount(count + 1),
    [count] // needed for memoization
  )

  return (
    <div>
      <p>You clicked {count} times</p>
      <button id="increment" onClick={handleCountIncrement}>
        Click me
      </button>
    </div>
  )
}
