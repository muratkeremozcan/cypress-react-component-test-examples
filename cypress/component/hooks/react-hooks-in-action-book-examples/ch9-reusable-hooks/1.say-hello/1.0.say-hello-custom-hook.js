import { useState } from 'react'
import useDocumentTitle from './use-doc-title'

// compare to src/examples/ch4/1.say-hello.js and src/examples/ch7/1.say-hello-memo.js

// [9.0] why use custom hooks?
// in the same way that we split longer functions into a number of shorter functions,
// we can extract the work the hooks do into custom hooks outside the component,
// to simplify the component code and to prepare the functionality for reuse.

export default function SayHello() {
  const greetings = ['Hello', 'Ciao', 'Hola', 'こんにちは']
  // note: interestingly, there is no warning about useMemo in this version of the code
  // const greetings = useMemo(() => ['Hello', 'Ciao', 'Hola', 'こんにちは'], [])

  const [index, setIndex] = useState(0)

  // [9.1] identify what might be a common need between components, and refactor
  // useEffect(() => (document.title = greetings[index]), [greetings, index])
  useDocumentTitle(greetings[index])

  const updateGreeting = () =>
    setIndex(Math.floor(Math.random() * greetings.length))

  return <button onClick={updateGreeting}>Say Hi</button>
}
