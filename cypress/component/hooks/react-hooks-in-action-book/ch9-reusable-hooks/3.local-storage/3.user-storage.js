import useLocalStorage from './use-local-storage'

export default function UserStorage() {
  // [9.4.1] destructure as needed
  const [user, setUser] = useLocalStorage()

  return (
    <select value={user} onChange={(e) => setUser(e.target.value)}>
      <option>Jason</option>
      <option>Akiko</option>
      <option>Clarisse</option>
      <option>Sanjiv</option>
    </select>
  )
}
