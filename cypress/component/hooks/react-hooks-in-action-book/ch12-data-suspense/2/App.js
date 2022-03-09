import React, { Suspense, useState } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import { fetchMessage, fetchNextMessage } from './api'
import { threeWay } from './utils'
import './styles.css'

function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <>
      <p className="error">{error}</p>
      <button data-cy="try-again" onClick={resetErrorBoundary}>
        Try Again
      </button>
    </>
  )
}

function Message({ getMessage, next }) {
  return (
    <>
      <p className="message">{getMessage().message}</p>
      <button data-cy="next" onClick={next}>
        Next
      </button>
    </>
  )
}

export default function App() {
  const [canError, setCanError] = useState(false)
  const getFirstMessage = threeWay(fetchMessage(canError))
  const [getMessage, setGetMessage] = useState(() => getFirstMessage)

  function nextMessage() {
    const nextPromise = fetchNextMessage(canError)
    const getNextMessage = threeWay(nextPromise)
    return setGetMessage(() => getNextMessage)
  }

  return (
    <div className="App">
      <button
        onClick={() => setCanError((previousState) => !previousState)}
        data-cy="toggle"
      >
        {canError ? 'Stop' : 'Start'} erroring
      </button>

      {/* ch[12.1] ErrorBoundary takes an onReset prop, used to recover*/}
      {/* https://github.com/bvaughn/react-error-boundary */}
      <ErrorBoundary FallbackComponent={ErrorFallback} onReset={nextMessage}>
        <Suspense fallback={<p className="loading">Loading message...</p>}>
          <Message getMessage={getMessage} next={nextMessage} />
        </Suspense>
      </ErrorBoundary>
    </div>
  )
}

// wrapPromise function from the React docs examples
// https://codesandbox.io/s/frosty-hermann-bztrp?file=/src/fakeApi.js
// https://reactjs.org/docs/concurrent-mode-suspense.html#approach-3-render-as-you-fetch-using-suspense
