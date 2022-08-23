// www.youtube.com/watch?v=N5R6NL3UE7I&list=WL&index=13&t=2s
import { useState, useTransition } from 'react'

export default function App() {
  const [, startTransition] = useTransition()
  const [input, setInput] = useState('')
  const [list, setList] = useState([])

  const LIST_SIZE = 1000

  function handleChange(e) {
    setInput(e.target.value)

    // useTransition to defer state updates / de-prioritize expensive operations
    // here the below is an expensive operation
    startTransition(() => {
      const l = []
      for (let i = 0; i < LIST_SIZE; i++) {
        l.push(e.target.value)
      }

      setList(l)
    })
  }

  return (
    <>
      <input type="text" value={input} onChange={handleChange} />
      {list.map((item, index) => (
        <div data-cy={`item-${index}`} key={index}>
          {item}
        </div>
      ))}
    </>
  )
}
