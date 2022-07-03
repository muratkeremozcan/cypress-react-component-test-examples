// https://github.com/muratkeremozcan/epic-react/blob/main/02.react-hooks/src/exercise/03.js

import * as React from 'react'

// [3] TL,DR; when 2 sibling components need to share state,
// (1) move state management to their parent component
// (2) pass the state and setState down to the components
// (3) the components receive the state as props
// (4) manage state where all the components care for it

function Name({ name, onNameChange }) {
  return (
    <div>
      <label htmlFor="name">Name: </label>
      <input id="name" value={name} onChange={onNameChange} />
    </div>
  )
}

// (3) the components receive the state as props
function FavoriteAnimal({ animal, onAnimalChange }) {
  // (1) move state management to their parent component
  // function FavoriteAnimal() {
  // const [animal, setAnimal] = React.useState('')
  return (
    <div>
      <label htmlFor="animal">Favorite Animal: </label>
      <input id="animal" value={animal} onChange={onAnimalChange} />
    </div>
  )
}

// new, arbiter component we use after lifting state
function Display({ name, animal }) {
  return (
    <div data-cy="display">{`Hey ${name}, your favorite animal is ${animal}`}</div>
  )
}

function App() {
  const [name, setName] = React.useState('')
  // (1) move state management to the parent component
  const [animal, setAnimal] = React.useState('')
  return (
    <form>
      <Name name={name} onNameChange={(event) => setName(event.target.value)} />
      {/* (2) pass the state and setState down to the components */}
      {/* <FavoriteAnimal /> */}
      <FavoriteAnimal
        animal={animal}
        onAnimalChange={(event) => setAnimal(event.target.value)}
      />
      <Display name={name} animal={animal} />
    </form>
  )
}

export default App
