// https://www.youtube.com/watch?v=THL1OPn72vo&t=1s

import { useState, useMemo } from 'react'

export default function App() {
  const [number, setNumber] = useState(0)
  const [dark, setDark] = useState(false)
  // useMemo vs useCallback difference:
  // useMemo takes a fn, gives us the return value of the function
  // useCallback takes a fn, gives us the entire function
  // toggle to see the difference
  const doubleNumber = useMemo(() => slowFunction(number), [number])
  // const doubleNumber = slowFunction(number)
  const themeStyles = {
    backgroundColor: dark ? 'black' : 'white',
    color: dark ? 'white' : 'black'
  }

  return (
    <>
      <input
        data-cy="number"
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />
      <button
        data-cy="toggle-theme"
        onClick={() => setDark((prevDark) => !prevDark)}
      >
        Change Theme
      </button>
      <div style={themeStyles}>{doubleNumber}</div>
    </>
  )
}

function slowFunction(num) {
  console.log('calling slow function')
  for (let i = 0; i < 1000000000; i++) {
    // do nothing
  }
  return num * 2
}
