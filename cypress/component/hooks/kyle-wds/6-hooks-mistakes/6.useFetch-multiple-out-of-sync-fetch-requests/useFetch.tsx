import { useEffect, useState } from 'react'

// https://www.youtube.com/watch?v=GGo3MVBFr1A

// mistake: multiple fetch requests back to back may be out of sync because of the async nature of state updates

export function useFetch(url: string) {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    // fix: use AbortController to cancel previous fetch requests
    const controller = new AbortController()

    setLoading(true)
    // fix: use fetch's 2nd argument to pass in the AbortController's signal
    fetch(url, { signal: controller.signal })
      .then((res) => res.json())
      .then((data) => {
        setData(data)
        setLoading(false)
      })
      .catch((error) => {
        setError(error)
        setLoading(false)
      })

    // fix: use the clean up function built into useEffect
    // to cancel the fetch request if the useEffect changes
    return () => controller.abort()
  }, [url])

  return { loading, data, error }
}
