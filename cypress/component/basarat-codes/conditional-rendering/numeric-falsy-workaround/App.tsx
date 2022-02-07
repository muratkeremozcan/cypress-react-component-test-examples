import { useState } from 'react'
import '../App.css'
import { db } from './lyrics'

export default function App() {
  const [messages, setMessages] = useState<string[]>([
    'Never gonna give you up'
  ])
  /** adds additional messages */
  const addMessage = () => setMessages([...messages, db[messages.length]])
  /** removes the last added message */
  const removeMessage = () =>
    setMessages(messages.slice(0, messages.length - 1))

  return (
    <div className="app">
      <div>
        <button onClick={addMessage} data-cy="add">
          Add
        </button>
        <button onClick={removeMessage} data-cy="remove">
          Remove
        </button>
        {/* if you don't use !!, ternary, or messages.length > 0 
        0 displays when the list is empty
        because React, by design, displays numeric falsies 0 and NaN */}

        {!!messages.length && (
          <ul>
            {messages.map((message) => (
              <li key={message}>{message}</li>
            ))}
          </ul>
        )}

        {messages.length ? (
          <ul>
            {messages.map((message) => (
              <li key={message}>{message}</li>
            ))}
          </ul>
        ) : null}
      </div>
    </div>
  )
}
