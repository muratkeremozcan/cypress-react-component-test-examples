// https://www.youtube.com/watch?v=jCGMedd6IWA&list=WL&index=9
import { useMemo, useDeferredValue } from 'react'

export default function List({ input }) {
  const LIST_SIZE = 1000
  const deferredValue = useDeferredValue(input)

  return useMemo(() => {
    const l = []
    for (let i = 0; i < LIST_SIZE; i++) {
      l.push(
        <div data-cy={`item-${i}`} key={i}>
          {deferredValue}
        </div>
      )
    }

    return l
  }, [deferredValue])
}
