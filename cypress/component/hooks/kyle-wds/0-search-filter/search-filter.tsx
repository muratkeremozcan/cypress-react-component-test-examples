import { useMemo, useRef, useState } from 'react'
import { isEmpty, ifElse, pipe, pathOr, trim } from 'ramda'
import { noop } from 'lodash'

export default function App() {
  const inputRef = useRef<HTMLInputElement>()
  const [items, setItems] = useState<string[]>([])
  const [query, setQuery] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    const value = inputRef.current.value

    if (value === '') return
    setItems((prev) => [...prev, value])

    inputRef.current.value = ''
  }

  function handleSubmitR(e) {
    const getInputValue = pipe(pathOr('', ['current', 'value']), trim)
    const value = getInputValue(inputRef)
    const setValue = ifElse(isEmpty, noop, () => setItems((prev) => [...prev, value]))
    const searchValue = pipe(getInputValue, setValue)

    e.preventDefault()
    searchValue(inputRef)
    inputRef.current.value = ''
  }

  const filteredItems = useMemo(
    () => items.filter((item) => item.toLowerCase().includes(query.toLowerCase())),
    [items, query]
  )

  return (
    <>
      Search:
      <input
        data-cy="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        type="search"
      />
      <br />
      <form onSubmit={handleSubmitR}>
        New Item:
        <input data-cy="new-item" ref={inputRef} type="text" />
        <button type="submit">Add</button>
      </form>
      <h3>Items:</h3>
      {filteredItems.map((item, i) => (
        <div key={i} data-cy="filtered-items">
          {item}
        </div>
      ))}
    </>
  )
}
