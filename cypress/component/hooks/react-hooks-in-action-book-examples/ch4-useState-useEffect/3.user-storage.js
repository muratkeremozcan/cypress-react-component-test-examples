import { useState, useEffect } from 'react'

// [4.3] controlling when useEffect runs
/*
  useEffect(cb, [a, b, c]) = run the effect when a, or b, or c change
  useEffect(cb, [a]) = run the effect when a changes
  useEffect(cb, []) = run the effect when... nothing changes, that's why it runs just once
  useEffect(cb) = run the effect at every render
  */

export default function UserStorage() {
  const [user, setUser] = useState()

  useEffect(() => {
    // In the beginning there is nothing in localStorage, but after a setItem, we keep getting it
    const storedUser = window.localStorage.getItem('user')

    if (storedUser) setUser(storedUser)
  }, [])

  // if a user changes, useEffect is fired. If the user stays the same, it is memoized
  useEffect(() => window.localStorage.setItem('user', user), [user])

  return (
    <select value={user} onChange={(e) => setUser(e.target.value)}>
      <option>Jason</option>
      <option>Akiko</option>
      <option>Clarisse</option>
      <option>Sanjiv</option>
    </select>
  )
}
