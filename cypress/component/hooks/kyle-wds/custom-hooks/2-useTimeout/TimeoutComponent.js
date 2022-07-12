import { useState } from 'react'
import useTimeout from './useTimeout'

export default function TimeoutComponent() {
  const [count, setCount] = useState(10)
  const { clear, reset } = useTimeout(() => setCount(0), 1000)

  return (
    <div>
      <div data-cy="count">{count}</div>
      <button data-cy="increment" onClick={() => setCount((c) => c + 1)}>
        Increment
      </button>
      <button data-cy="clear-timeout" onClick={clear}>
        Clear Timeout
      </button>
      <button data-cy="reset-timeout" onClick={reset}>
        Reset Timeout
      </button>
    </div>
  )
}
