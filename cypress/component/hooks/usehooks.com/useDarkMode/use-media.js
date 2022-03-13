import { useEffect, useState } from 'react'

// Code from https://usehooks.com/useMedia

// Alternate hook that accepts a single query
export default function useMedia(queries, values, defaultValue) {
  // State and setter for matched value
  const [value, setValue] = useState(defaultValue)

  // Array containing a media query list for each query
  const mediaQueryLists = queries.map((q) => window.matchMedia(q))

  // State update function
  const getValue = () => {
    // Get index of first media query that matches
    const index = mediaQueryLists.findIndex((mql) => mql.matches)
    // Return related value or defaultValue if none
    return typeof values[index] !== 'undefined' ? values[index] : defaultValue
  }

  useEffect(
    () => {
      // Set the initial value
      setValue(getValue)

      // Event listener callback
      // By defining getValue outside of useEffect we ensure that it has ...
      // ... current values of hook args (as this hook only run on mount/dismount).
      const handler = () => setValue(getValue)

      // Set a listener for each media query with above handler as callback.
      mediaQueryLists.forEach((mql) => mql.addListener(handler))

      // Remove listeners on cleanup
      return () => mediaQueryLists.forEach((mql) => mql.removeListener(handler))
    },
    [] // Empty array ensures effect is only run on mount and unmount
  )

  return value
}
