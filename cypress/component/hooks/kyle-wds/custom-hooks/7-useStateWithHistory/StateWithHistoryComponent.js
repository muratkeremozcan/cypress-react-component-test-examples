import { useState } from 'react'
import useStateWithHistory from './useStateWithHistory'

export default function StateWithHistoryComponent() {
  const [count, setCount, { history, pointer, back, forward, go }] =
    useStateWithHistory(1)
  const [name, setName] = useState('Kyle')

  return (
    <div>
      <div data-cy="count">{count}</div>
      <div data-cy="history">{history.join(', ')}</div>
      <div data-cy="pointer">Pointer - {pointer}</div>
      <div>{name}</div>
      <button onClick={() => setCount((currentCount) => currentCount * 2)}>
        Double
      </button>
      <button onClick={() => setCount((currentCount) => currentCount + 1)}>
        Increment
      </button>
      <button onClick={back}>Back</button>
      <button onClick={forward}>Forward</button>
      <button onClick={() => go(2)}>Go To Index 2</button>
      <button onClick={() => setName('John')}>Change Name</button>
    </div>
  )
}
