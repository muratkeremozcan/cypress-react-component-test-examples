import { useState, useRef, useEffect } from 'react'

// [5] useRef:
// DOM nodes are not created until render, so function components do not have access to the Dom.
// to get access to the DOM, you need to ask React to give you access to a particular DOM node
// when it renders your component. The way this happens is through a special prop called ref
/*
function MyDiv() {
  const myDivRef = React.useRef() // (1) create the ref
  React.useEffect(() => {
    const myDiv = myDivRef.current  // (3) get the ref's current value
    // myDiv is the div DOM node!
    console.log(myDiv)
  }, [])
  return <div ref={myDivRef}>hi</div> // (2) link to ref to the dom node
}
*/

export default function App() {
  const [name, setName] = useState('')
  const inputRef = useRef() // (1) create the ref)
  // (3) get the ref's current value
  const focus = () => {
    console.log(inputRef.current)
    return inputRef.current.focus()
  }

  // useRef can be used to store previous state
  // an persist values between renders in a fn component
  const prevName = useRef()
  useEffect(() => {
    prevName.current = name
  }, [name])

  return (
    <>
      <input
        ref={inputRef} // (2) link to ref to the dom node
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <div data-cy="name-text">
        My name is {name} and it used to be {prevName.current}
      </div>
      <button onClick={focus}>Focus</button>
    </>
  )
}
