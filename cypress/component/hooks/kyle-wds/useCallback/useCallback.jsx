// https://www.youtube.com/watch?v=_AyFP5s69N4&list=WL&index=34
import { useState, useCallback } from 'react'
import List from './List'

export default function App() {
  const [number, setNumber] = useState(1)
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
  // useCallback when you have functions that are passed as props to child components and you want to avoid
  // unnecessary re-renders of those child components.

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
      <button data-cy="toggle-theme" onClick={() => setDark((prevDark) => !prevDark)}>
        Toggle theme
      </button>

      <List getItems={getItems} />
    </div>
  )
}
