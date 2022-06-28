import { useState, useEffect } from 'react'

// Define general type for useWindowSize hook, which includes width and height
interface Size {
  width: number | undefined
  height: number | undefined
}

// Hook
function useWindowSize(): Size {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState<Size>({
    width: undefined,
    height: undefined
  })

  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      })
    }
    // Add event listener
    window.addEventListener('resize', handleResize)
    // Call handler right away so state gets updated with initial window size
    handleResize()
    // Remove event listener on cleanup
    return () => window.removeEventListener('resize', handleResize)
  }, []) // Empty array ensures that effect is only run on mount
  return windowSize
}

// Usage
function App() {
  const size: Size = useWindowSize()
  return (
    <div>
      {size.width}px / {size.height}px
    </div>
  )
}

// cypress/component/hooks/react-hooks-in-action-book-examples/ch4-useState-useEffect/4.challenge.cy.js

describe('Challenge', () => {
  let resizeEventFired

  beforeEach(() => {
    cy.mount(<App />)
    resizeEventFired = false

    // if resize fires at any point, we set the variable to true
    // must happen after mount, or it gets flakey
    cy.window().then((win) =>
      win.addEventListener('resize', () => (resizeEventFired = true))
    )
  })

  it('should not trigger a resize event without window size change', () => {
    // @ts-expect-error
    cy.wrap().should(() => expect(resizeEventFired).to.eq(false))
    cy.contains('500px / 500px')
  })

  it('should be small under 400 width', () => {
    cy.viewport(399, 500)

    // @ts-expect-error
    cy.wrap().should(() => expect(resizeEventFired).to.eq(true))
    cy.contains('399px / 500px')
  })
})
