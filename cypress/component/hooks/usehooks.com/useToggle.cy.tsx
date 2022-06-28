import { useCallback, useState } from 'react'

// https://usehooks.com/useToggle/

const useToggle = (initialState: boolean = false): [boolean, any] => {
  // initialize the state
  const [state, setState] = useState<boolean>(initialState)

  // [6.4] why useCallback?
  // custom functions get defined on every render and can cause (network) spam.
  // useCallback lets us memoize functions. To prevent the redefinition or recalculation of values.
  // useCallBack(updaterFn, [dependencies])
  const toggle = useCallback(() => setState((state) => !state), [])

  return [state, toggle]
}

function App() {
  const [isTextChanged, setIsTextChanged] = useToggle()

  return (
    <button onClick={setIsTextChanged}>
      {isTextChanged ? 'Toggled' : 'Click to Toggle'}
    </button>
  )
}

it('useToggle', () => {
  cy.mount(<App />)

  cy.contains('button', 'Click to Toggle').click()
  cy.contains('button', 'Toggled').click()
  cy.contains('button', 'Click to Toggle')
})
