// https://www.youtube.com/watch?v=THL1OPn72vo&t=1s

import { useState, useMemo } from 'react'

export default function App() {
  const [number, setNumber] = useState(0)
  const [dark, setDark] = useState(false)
  // useMemo vs useCallback difference:
  // useMemo takes a fn, gives us the return value of the function
  // useCallback takes a fn, gives us the entire function

  // useMemo is used when you want to memoize expensive computations.
  // That is, if you have a function that performs complex calculations
  // and you don't want to re-run these calculations on every render, you can use useMemo.
  // useMemo will only recompute the memoized value when one of the dependencies has changed.

  // useCallback is used when you want to prevent unnecessary re-creation of functions.
  // In JS, a new function instance is created every time a component re-renders.
  // This can lead to unnecessary re-renders in child components if these functions are passed as props.
  // To prevent this, you can use useCallback to return a memoized version of the callback function
  // that only changes if one of the dependencies has changed.

  // useMemo when you have expensive computations that you don't want to perform on every render,
  // useCallback when you have functions that are passed as

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
      <button data-cy="toggle-theme" onClick={() => setDark((prevDark) => !prevDark)}>
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
