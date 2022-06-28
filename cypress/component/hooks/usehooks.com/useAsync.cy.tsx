import { useState, useEffect, useCallback } from 'react'

// https://usehooks.com/useAsync
// similar to useFetch https://github.com/muratkeremozcan/react-hooks-in-action-with-cypress/blob/main/src/utils/useFetch.js
// similar to useQuery from ReactQuery https://github.com/muratkeremozcan/react-hooks-in-action-with-cypress/blob/main/src/components/Bookables/BookableEdit.js#L62

const useAsync = <T, E = string>(
  asyncFunction: () => Promise<T>,
  immediate = true
) => {
  const [status, setStatus] = useState<
    'idle' | 'pending' | 'success' | 'error'
  >('idle')
  const [value, setValue] = useState<T | null>(null)
  const [error, setError] = useState<E | null>(null)

  // The execute function wraps asyncFunction and handles setting state for pending, value, and error.
  // useCallback ensures the below useEffect is not called on every render, but only if asyncFunction changes.
  const execute = useCallback(() => {
    setStatus('pending')
    setValue(null)
    setError(null)

    return asyncFunction()
      .then((response: any) => {
        setValue(response)
        setStatus('success')
      })
      .catch((error: any) => {
        setError(error)
        setStatus('error')
      })
  }, [asyncFunction])

  // Call execute if we want to fire it right away.
  // Otherwise execute can be called later, such as in an onClick handler.
  useEffect(() => {
    if (immediate) {
      execute()
    }
  }, [execute, immediate])

  return { execute, status, value, error }
}

// An async function for testing our hook, will be successful 50% of the time.
const myFunction = (): Promise<string> =>
  new Promise((resolve, reject) =>
    setTimeout(() => {
      Math.random() > 0.5 ? resolve('success') : reject('failure')
    }, 1000)
  )

// Usage
function App() {
  const { execute, status, value, error } = useAsync<string>(myFunction, false)

  return (
    <div>
      <span data-cy="result">
        {status === 'idle' && (
          <div>Start your journey by clicking a button</div>
        )}
        {status === 'success' && <div>{value}</div>}
        {status === 'error' && <div>{error}</div>}
      </span>
      <button onClick={execute} disabled={status === 'pending'}>
        {status !== 'pending' ? 'Click me' : 'Loading...'}
      </button>
    </div>
  )
}

it('useAsync', () => {
  cy.clock()
  cy.mount(<App />)
  cy.contains('Start your journey')

  cy.get('button').click()
  cy.tick(1000)

  cy.getByCy('result').should((el) =>
    // @ts-ignore
    expect(el.text()).to.be.oneOf(['success', 'failure'])
  )
})
