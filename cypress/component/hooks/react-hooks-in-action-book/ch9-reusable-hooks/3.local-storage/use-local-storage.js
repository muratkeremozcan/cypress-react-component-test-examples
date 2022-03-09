import { useState, useEffect } from 'react'

export default function useLocalStorage() {
  const [user, setUser] = useState()

  useEffect(() => {
    const storedUser = window.localStorage.getItem('user')

    if (storedUser) setUser(storedUser)
  }, [])

  useEffect(() => window.localStorage.setItem('user', user), [user])

  // [9.4] identify what the component render needs - we want it dumb as possible - and return that
  // Manage state and effects related to a hook’s functionality within the hook and return only the value(s) that components need
  return [user, setUser]
}
