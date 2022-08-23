// https://www.youtube.com/watch?v=O6P86uwfdR0&list=WL&index=39
import { useState, useEffect } from 'react'

export default function App() {
  const [resourceType, setResourceType] = useState('posts')
  const [items, setItems] = useState([])

  console.log('render')
  // [] runs on mount
  // [resourceType] runs when the value changes
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      .then((response) => response.json())
      .then((json) => setItems(json))
  }, [resourceType])

  return (
    <>
      <div>
        <button data-cy="posts" onClick={() => setResourceType('Posts')}>
          Posts
        </button>
        <button data-cy="users" onClick={() => setResourceType('Users')}>
          Users
        </button>
        <button data-cy="comments" onClick={() => setResourceType('Comments')}>
          Comments
        </button>
      </div>
      <h1 data-cy="resource-type">{resourceType}</h1>
      {items.map((item) => (
        <pre key={item.id} data-cy={`item-${item.id}`}>
          {JSON.stringify(item)}
        </pre>
      ))}
    </>
  )
}
