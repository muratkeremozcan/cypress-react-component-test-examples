/** Tweak based on your machine performance to get some lag */
const COUNT = 1000

/** Return a list of items based on @param searchTerm */
export function searchItems(searchTerm: string) {
  return [...Array(COUNT)].map(() => {
    console.log(searchTerm)
    return (
      (searchTerm ? searchTerm + ' ' : '') + Math.floor(Math.random() * COUNT)
    )
  })
}

/** @returns random characters */
export function randomChars() {
  return Math.random().toString(36).slice(2, 7)
}

/**
 * This component is intentionally designed to be slow
 * - bad keys
 * - inline styles
 */
export function List({ items }: { items: string[] }) {
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
