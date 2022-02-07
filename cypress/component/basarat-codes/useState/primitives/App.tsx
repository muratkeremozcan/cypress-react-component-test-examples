import { useState } from 'react'

export default function App() {
  const [count, setCount] = useState(0)

  // Updater function: when we want to update a state value based on a previous value, we can pass it a fn
  // React passes that fn to the current state value, and uses the return value as the new state Value
  // setValue(oldValue => newValue)
  const handleCount = () => {
    setCount((c) => c + 1)
    setCount((c) => c + 1)
  }

  return (
    <div>
      <button data-cy="count" onClick={handleCount}>
        {count}
      </button>
    </div>
  )
}
