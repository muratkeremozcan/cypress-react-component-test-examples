import { useState, useEffect } from 'react'

export default function SayHello() {
  const greetings = ['Hello', 'Ciao', 'Hola', 'こんにちは']

  const [index, setIndex] = useState(0)

  // [4.0] useEffect: a hook for handling side effects. It can be used for:
  /// * running side effects after a component mounts, renders/updates, unmounts/cleans up
  /// * controlling when a side effect runs
  // think of useEffect as a replacement for life cycle methods: componentDidMount, componentDidUpdate, and componentWillUnmount
  useEffect(() => (document.title = greetings[index]))
  // here the document.title is bound to the greetings[index]
  // [index] changes with every setIndex on button click
  // therefore we want useEffect firing every render

  const updateGreeting = () =>
    setIndex(Math.floor(Math.random() * greetings.length))

  return <button onClick={updateGreeting}>Say Hi</button>
}
