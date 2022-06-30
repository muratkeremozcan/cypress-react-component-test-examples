// https://github.com/muratkeremozcan/epic-react/blob/main/01.react-fundamentals/src/exercise/07.js

// Rendering Lists
// http://localhost:3000/isolated/exercise/07.js

import * as React from 'react'

const allItems = [
  { id: 'apple', value: '🍎 apple' },
  { id: 'orange', value: '🍊 orange' },
  { id: 'grape', value: '🍇 grape' },
  { id: 'pear', value: '🍐 pear' }
]

function App() {
  const [items, setItems] = React.useState(allItems)

  function addItem() {
    const itemIds = items.map((i) => i.id)
    setItems([...items, allItems.find((i) => !itemIds.includes(i.id))])
  }

  function removeItem(item) {
    setItems(items.filter((i) => i.id !== item.id))
  }

  return (
    <div className="keys">
      <button
        data-cy="add-item"
        disabled={items.length >= allItems.length}
        onClick={addItem}
      >
        add item
      </button>
      <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
        {items.map((item) => (
          // 🐨 add a key prop to the <li> below. Set it to item.id
          // [7] TL,DR; key prop is necessary when rendering arrays
          // so that React can maintain state, track the elements over time
          <li data-cy={item.id} key={item.id}>
            <button onClick={() => removeItem(item)}>remove</button>{' '}
            <label htmlFor={`${item.id}-input`}>{item.value}</label>{' '}
            <input id={`${item.id}-input`} defaultValue={item.value} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
