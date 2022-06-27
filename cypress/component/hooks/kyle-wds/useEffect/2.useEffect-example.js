// https://www.youtube.com/watch?v=O6P86uwfdR0&list=WL&index=39
import { useState, useEffect } from 'react'

export default function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  const handleResize = () => setWindowWidth(window.innerWidth)

  useEffect(() => {
    window.addEventListener('resize', handleResize)

    // the useEffect hook incorporates a simple mechanism for cleaning up our effects.
    // Just return a function from the effect. React runs the returned function when it’s time to tidy up.
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <>
      <div>{windowWidth}</div>
    </>
  )
}
