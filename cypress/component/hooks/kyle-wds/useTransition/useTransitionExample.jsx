// www.youtube.com/watch?v=N5R6NL3UE7I&list=WL&index=13&t=2s
import { useState, useTransition } from 'react'

// useTransition to defer state updates / de-prioritize expensive operations

// TODO enable when there is React 18 support
export default function UseTransitionExample() {
  // const [isPending, startTransition] = useTransition()
  const [input, setInput] = useState('')
  const [list, setList] = useState([])

  const LIST_SIZE = 10000

  function handleChange(e) {
    setInput(e.target.value)

    // startTransition(() => {
    const l = []
    for (let i = 0; i < LIST_SIZE; i++) {
      l.push(e.target.value)
    }

    setList(l)
    // })
  }

  return (
    <>
      <input type="text" value={input} onChange={handleChange} />
      {list.map((item, index) => (
        <div key={index}>{item}</div>
      ))}
    </>
  )
}
