import { useEffect } from 'react'

// [9.2] naming convention: use*
// To make it clear that a function is a custom hook and should follow the rules of hooks,
// start its name with use, for example, useDocumentTitle, useFetch, useUsers, or useLocalStorage.
/** sets document title with the given title with useEffect */
export default function useDocumentTitle(title) {
  return useEffect(() => {
    document.title = title
  }, [title])
}
