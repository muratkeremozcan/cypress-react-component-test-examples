// www.youtube.com/watch?v=wU57kvYOxT4&t=9s

// In useEffect the code in the hook is run asynchronously after React renders the component.
// This means the code for this hook can run after the DOM is painted to the screen.

// The useLayoutEffect hook runs synchronously directly after React calculates the DOM changes
// but before it paints those changes to the screen.

// This means that useLayoutEffect code will delay the painting of a component since it runs synchronously before painting,
// while useEffect is asynchronous and will not delay the paint.

//  In general it is best to always use useEffect and only switch to useLayoutEffect when you actually run into an issue with useEffect
// causing flickers in your DOM or incorrect results.

import { useState, useLayoutEffect, useRef } from 'react'

export default function App() {
  const [show, setShow] = useState(false)
  const popup = useRef()
  const button = useRef()

  useLayoutEffect(() => {
    if (popup.current == null || button.current == null) return

    const { bottom } = button.current.getBoundingClientRect()

    popup.current.style.top = `${bottom + 25}px`
  }, [show])

  return (
    <>
      <button ref={button} onClick={() => setShow((prev) => !prev)}>
        Click here
      </button>

      {show && (
        <div style={{ position: 'absolute' }} ref={popup}>
          This is a popup
        </div>
      )}
    </>
  )
}
