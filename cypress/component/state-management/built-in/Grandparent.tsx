import { useState } from 'react'
import Parent from './Parent'

// In React, props are used to pass data down from a parent component to a child component.
// State, on the other hand, is used to manage data within a component itself.
// To send data/state upwards from a child component to a parent or grandparent component,
// we use a callback function that is passed down from the parent to child as a prop.

// In this example, the Grandparent component has a state called grandparentState.
// It passes down a callback function called handleStateChange to the Parent component via a prop named onParentStateChange (could be anything).
// Parent component uses that callback to pass state up as an event to the Grandparent component.

// When the Child component is rendered within the Parent component,
// the Parent component passes down the callback function to the Child component via a prop named onChildStateChange.

// When the Child component updates its state by clicking the "Update State" button,
// it calls the onChildStateChange function passed down to it a a prop,
// which in turn calls the setGrandparentState function defined in the Grandparent component,
// thus updating the state of the Grandparent component.

export default function Grandparent() {
  const [grandparentState, setGrandparentState] = useState<string>('Hello from Grandparent!')

  const handleStateChange = (newState: string) => {
    setGrandparentState(newState)
  }

  return (
    <div data-cy="Grandparent">
      <h1>Grandparent</h1>
      <p>{grandparentState}</p>
      <Parent onParentStateChange={handleStateChange} />
    </div>
  )
}
