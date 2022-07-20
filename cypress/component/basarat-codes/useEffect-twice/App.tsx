// https://www.youtube.com/watch?v=J3Mcbne1Iq4

import { Timer } from './Timer'
import { useEffect, useState } from 'react'

export const CustomTimer = () => {
  const [seconds, setSeconds] = useState(0)

  useEffect(() => {
    const interval = setInterval(
      () => setSeconds((seconds) => seconds + 1),
      1000
    )
    // In React whenever you setup something during mount,
    // you need to clear it when you unmount
    // need to clear interval when component unmounts, otherwise it will mount twice
    return () => clearInterval(interval)
  }, [])

  return <h1 data-cy="custom-timer">Custom: {seconds}</h1>
}

function App() {
  return (
    <>
      <Timer />
      <CustomTimer />
    </>
  )
}

export default App
