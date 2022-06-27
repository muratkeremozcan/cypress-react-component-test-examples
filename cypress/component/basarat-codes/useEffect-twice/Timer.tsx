import { useEffect, useState } from 'react'

export const Timer = () => {
  const [seconds, setSeconds] = useState(0)

  useEffect(() => {
    const interval = setInterval(
      () => setSeconds((seconds) => seconds + 1),
      1000
    )
    return () => clearInterval(interval)
  }, [])

  return <h1 data-cy="timer">Seconds: {seconds}</h1>
}
