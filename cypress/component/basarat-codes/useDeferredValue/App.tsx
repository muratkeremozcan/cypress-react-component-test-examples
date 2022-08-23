// https://www.youtube.com/watch?v=AZkMRYr_0C0&list=WL&index=8

import React, { useDeferredValue, useState } from 'react'
import { Products } from './List'

function App() {
  const [value, setValue] = useState('')
  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setValue(e.target.value)
  }

  const deferredValue = useDeferredValue(value)
  const isStale = deferredValue !== value

  return (
    <div>
      <input
        style={{ color: isStale ? 'dimgray' : 'black' }}
        value={value}
        onChange={handleChange}
      />
      <Products searchTerm={deferredValue} />
    </div>
  )
}

export default App
