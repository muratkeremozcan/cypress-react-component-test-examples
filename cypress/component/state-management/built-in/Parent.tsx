import { useState } from 'react'
import Child from './Child'

type ParentProps = {
  onParentStateChange: (newState: string) => void
}

export default function Parent({ onParentStateChange }: ParentProps) {
  const [parentState, setParentState] = useState<string>('Hello from Parent!')

  const handleStateChange = (newState: string) => {
    setParentState(newState) // set own state
    onParentStateChange(newState) // pass state to parent
  }

  return (
    <div data-cy="Parent">
      <h2>Parent</h2>
      <p>{parentState}</p>
      <Child onChildStateChange={handleStateChange} />
    </div>
  )
}
