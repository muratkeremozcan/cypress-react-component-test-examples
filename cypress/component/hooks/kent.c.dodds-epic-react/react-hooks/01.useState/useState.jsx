// https://github.com/muratkeremozcan/epic-react/blob/main/02.react-hooks/src/exercise/01.js

import * as React from 'react'

export default function Greeting({ initialName = '' }) {
  // [1] TL,DR; useState is used to create a state variable and a setter function to update that state
  // it is to persist & manage state in a functional component

  const [name, setName] = React.useState(initialName)

  const handleChange = (event) => {
    // console.log(event.target.value)
    setName(event.target.value)
  }

  return (
    <div>
      <form>
        <label htmlFor="name">Name: </label>
        <input onChange={handleChange} id="name" />
      </form>
      {name ? <strong>Hello {name}</strong> : 'Please type your name'}
    </div>
  )
}
