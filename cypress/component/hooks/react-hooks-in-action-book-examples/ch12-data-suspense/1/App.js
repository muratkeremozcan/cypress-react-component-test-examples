import React, { Suspense, useState } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import fetchMessage from './api'
import { makeThrower } from './utils'
import './styles.css'

function ErrorFallback({ error }) {
  return <p className="error">{error}</p>
}

export default function App() {
  const [canError, setCanError] = useState(false)

  const maybeGetMessage = makeThrower(fetchMessage(canError))

  /** accesses the data, returns either the component, or the promise (Suspense), or the error (ErrorBoundary) */
  function Message() {
    const data = maybeGetMessage()
    return <p className="message">{data.message}</p>
  }

  return (
    <div className="App">
      <button
        onClick={() => setCanError((previousState) => !previousState)}
        data-cy="toggle"
      >
        {canError ? 'Stop' : 'Start'} erroring
      </button>

      {/* ch[12.0] component vs Suspense vs ErrorBoundary
      while loading show the Suspense, if success show the component, if error show the ErrorBoundary */}
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Suspense fallback={<p className="loading">Loading message...</p>}>
          <Message />
        </Suspense>
      </ErrorBoundary>
    </div>
  )
}
