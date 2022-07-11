import { useState } from 'react'
import useEventListener from './useEventListener'

export default function EventListenerComponent() {
  const [key, setKey] = useState('')
  useEventListener('keydown', (e) => {
    setKey(e.key)
  })

  return <div data-cy="last-key">Last Key: {key}</div>
}
