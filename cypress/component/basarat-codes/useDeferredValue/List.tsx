import { useMemo } from 'react'

const COUNT = 100 // Tweak based on your machine performance to get some lag

export function Products({ searchTerm }: { searchTerm: string }) {
  const items = useMemo(() => {
    return [...Array(COUNT)].map(
      () =>
        (searchTerm ? searchTerm + ' ' : '') + Math.floor(Math.random() * COUNT)
    )
  }, [searchTerm])

  return <List items={items} />
}

/**
 * This component is intentionally designed to be slow
 * - bad keys
 * - inline styles
 */
function List({ items }: { items: string[] }) {
  return (
    <div>
      {items.map((product, i) => (
        <div
          key={i + product}
          style={{
            margin: '1rem 0',
            backgroundColor: 'lightskyblue',
            borderRadius: '4px',
            boxShadow: '0 1px 4px rgba(0, 0, 0, 0.25)',
            padding: '10px'
          }}
          data-cy={`item-${i}`}
        >
          {product}
        </div>
      ))}
    </div>
  )
}
