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
