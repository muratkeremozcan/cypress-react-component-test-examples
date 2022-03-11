import { useState } from 'react'
import useDocumentTitle from './use-doc-title'

// [9.3] you can compose hooks, just like composing functions

const getRandomIndex = (length) => Math.floor(Math.random() * length)

export default function useRandomGreeting(greetings) {
  const [index, setIndex] = useState(() => getRandomIndex(greetings.length))

  useDocumentTitle(greetings[index])

  return () => setIndex(getRandomIndex(greetings.length))
}
