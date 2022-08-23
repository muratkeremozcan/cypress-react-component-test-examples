import { useState } from 'react'
import useUpdateEffect from './useUpdateEffect'

export default function UpdateEffectComponent() {
  const [count, setCount] = useState(10)
  useUpdateEffect(() => {
    alert(count)
  }, [count])
  // useEffect(() => alert(count), [count]) // would run on mount, we don't want that

  return (
    <div>
      <div data-cy="count">{count}</div>
      <button data-cy="increment" onClick={() => setCount((c) => c + 1)}>
        Increment
      </button>
    </div>
  )
}
