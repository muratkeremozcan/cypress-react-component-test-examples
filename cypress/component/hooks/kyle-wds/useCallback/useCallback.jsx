// https://www.youtube.com/watch?v=_AyFP5s69N4&list=WL&index=34
import { useState, useCallback } from 'react'
import List from './List'

export default function App() {
  const [number, setNumber] = useState(1)
  const [dark, setDark] = useState(false)
  // useMemo vs useCallback difference:
  // useMemo takes a fn, gives us the return value of the function
  // useCallback takes a fn, gives us the entire function
  // toggle to see the difference
  const getItems = useCallback(() => [number, number + 1, number + 2], [number])
  // const getItems = () => [number, number + 1, number + 2]

  const theme = {
    backgroundColor: dark ? '#333' : '#FFF',
    color: dark ? '#FFF' : '#333'
  }

  return (
    <div style={theme}>
      <input
        data-cy="number"
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <button
        data-cy="toggle-theme"
        onClick={() => setDark((prevDark) => !prevDark)}
      >
        Toggle theme
      </button>

      <List getItems={getItems} />
    </div>
  )
}
