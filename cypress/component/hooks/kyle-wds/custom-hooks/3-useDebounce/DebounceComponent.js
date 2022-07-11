import { useState } from 'react'
import useDebounce from './useDebounce'

export default function DebounceComponent() {
  const [count, setCount] = useState(10)
  useDebounce(() => alert(count), 1000, [count])

  return (
    <div>
      <div data-cy="count">{count}</div>
      <button data-cy="increment" onClick={() => setCount((c) => c + 1)}>
        Increment
      </button>
    </div>
  )
}
