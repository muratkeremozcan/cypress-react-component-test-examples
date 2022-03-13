import { useState, useCallback } from 'react'
import { mountHook } from '@cypress/react'

// testing example hook function from
// https://dev.to/jooforja/12-recipes-for-testing-react-applications-using-testing-library-1bh2#hooks
const useCounter = () => {
  const [count, setCount] = useState(0)

  const handleCountIncrement = useCallback(
    () => setCount(count + 1),
    [count] // needed for memoization
  )

  // const increment = useCallback(() => setCount((x) => x + 1), []) // though this was meh

  return { count, handleCountIncrement }
}

describe('useCounter hook', function () {
  it('increments the count', function () {
    mountHook(useCounter).then((result) => {
      expect(result.current.count).to.equal(0)

      result.current.handleCountIncrement()
      expect(result.current.count).to.equal(1)

      result.current.handleCountIncrement()
      expect(result.current.count).to.equal(2)
    })
  })
})
