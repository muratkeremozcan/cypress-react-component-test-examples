import React, { useEffect } from 'react'

// functional vs class based component example

export default function Card(props) {
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      console.log('after timeout')
      props.onSelect(null)
    }, 5000)

    return () => {
      console.log('clearing timeout')
      clearTimeout(timeoutId)
    }
  }, [props, props.onSelect])

  return [1, 2, 3, 4].map((choice) => (
    <button
      key={choice}
      data-testid={choice}
      onClick={() => props.onSelect(choice)}
    >
      {choice}
    </button>
  ))
}
