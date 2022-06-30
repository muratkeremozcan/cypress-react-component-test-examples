// https://github.com/muratkeremozcan/epic-react/blob/main/02.react-hooks/src/exercise/02.js

import * as React from 'react'

export default function Greeting({ initialName = '' }) {
  // [2] TL,DR;
  // (1) useState can take a fn as an argument which runs once on mount (lazy initialization),
  // otherwise useState runs on every render
  // (0) any time the component renders, useEffect is called
  // used for initial, costly calculations for initial state, so that they don't repeat on setState
  // (2) useEffect takes a second argument, the "dependency array", which signals to React
  // that the useEffect callback function should only called when those dependencies change
  // ([] for initial mount, no array for calling every time the component renders)
  // (3) custom hooks are just reuseable functions that help us tidy up the code

  const [name, setName] = useLocalStorageState('name', initialName)

  const handleChange = (event) => setName(event.target.value)

  return (
    <div>
      <form>
        <label htmlFor="name">Name: </label>
        <input value={name} onChange={handleChange} id="name" />
      </form>
      {name ? <strong>Hello {name}</strong> : 'Please type your name'}
    </div>
  )
}

function useLocalStorageState(key, defaultValue = '') {
  const [state, setState] = React.useState(
    () => window.localStorage.getItem('name') ?? defaultValue
  )

  React.useEffect(
    () => window.localStorage.setItem(key, String(state)),
    [key, state]
  )

  return [state, setState]
}
