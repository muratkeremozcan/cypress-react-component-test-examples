import { useState, useEffect, useMemo } from 'react'

// compare to src/examples/ch4/1.say-hello.js

export default function SayHello() {
  // const greetings = ['Hello', 'Ciao', 'Hola', 'こんにちは']
  // [7.0.3] that's why you wrap the dependency in useMemo
  const greetings = useMemo(() => ['Hello', 'Ciao', 'Hola', 'こんにちは'], [])

  const [index, setIndex] = useState(0)

  // [7.0] why useMemo?
  // here you might want to render only when index changes, instead of render with every change
  // useEffect(() => (document.title = greetings[index]))
  // [7.0.1] but, if you just add index, it will warn about the incomplete dependency
  // useEffect(() => (document.title = greetings[index]), [index])
  // [7.0.2] once you add the other missing dependency, you get another warning
  // "The 'greetings' array makes the dependencies of useEffect Hook (at line 20) change on every render.
  // To fix this, wrap the initialization of 'greetings' in its own useMemo "
  useEffect(() => (document.title = greetings[index]), [greetings, index])

  const updateGreeting = () =>
    setIndex(Math.floor(Math.random() * greetings.length))

  return <button onClick={updateGreeting}>Say Hi</button>
}
