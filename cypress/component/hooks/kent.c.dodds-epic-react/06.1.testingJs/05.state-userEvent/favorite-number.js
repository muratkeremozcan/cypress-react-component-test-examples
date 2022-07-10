import * as React from 'react'

function FavoriteNumber({ min = 1, max = 9 }) {
  const [number, setNumber] = React.useState(0)
  const [numberEntered, setNumberEntered] = React.useState(false)
  function handleChange(event) {
    setNumber(Number(event.target.value))
    setNumberEntered(true)
  }
  const isValid = !numberEntered || (number >= min && number <= max)
  return (
    <div>
      <label htmlFor="favorite-number">Favorite Number</label>
      <input
        id="favorite-number"
        type="number"
        value={number}
        onChange={handleChange}
      />
      {isValid ? (
        <div data-cy="favorite-number">Your favorite number is {number}</div>
      ) : (
        <div data-cy="invalid-number" role="alert">
          The number is invalid
        </div>
      )}
    </div>
  )
}

export { FavoriteNumber }
