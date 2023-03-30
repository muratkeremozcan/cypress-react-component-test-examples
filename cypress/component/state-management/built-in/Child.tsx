import { useState } from 'react'

type ChildProps = {
  onChildStateChange: (newState: string) => void
}

export default function Child({ onChildStateChange }: ChildProps) {
  const [childState, setChildState] = useState<string>('Hello from Child!')

  const handleClick = () => {
    const newState = 'Hello from Child, updated!'
    setChildState(newState) // set own state
    onChildStateChange(newState) // pass state to parent
  }

  return (
    <div data-cy="Child">
      <h3>Child</h3>
      <p>{childState}</p>
      <button data-cy="update-state" onClick={handleClick}>
        Update State
      </button>
    </div>
  )
}
