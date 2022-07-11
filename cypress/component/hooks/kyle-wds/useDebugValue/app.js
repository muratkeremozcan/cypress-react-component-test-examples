import { useState } from 'react'
import { useLocalStorage } from './use-local-storage'

export default function App() {
  const [firstName, setFirstName] = useLocalStorage('firstName', 'Murat')
  const [lastName, setLastName] = useState('Ozcan')

  return (
    <>
      First:{' '}
      <input value={firstName} onChange={(e) => setFirstName(e.target.value)} />
      <br />
      Last:{' '}
      <input value={lastName} onChange={(e) => setLastName(e.target.value)} />
    </>
  )
}
