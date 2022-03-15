import { useState, useEffect, useRef, MutableRefObject } from 'react'
import { mount } from '@cypress/react'

// Hook https://usehooks.com/useOnScreen/
function useOnScreen<T extends Element>(
  ref: MutableRefObject<T>,
  rootMargin: string = '0px'
): boolean {
  // State and setter for storing whether element is visible
  const [isIntersecting, setIntersecting] = useState<boolean>(false)

  useEffect(() => {
    const reference = ref.current

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Update our state when observer callback fires
        setIntersecting(entry.isIntersecting)
      },
      {
        rootMargin
      }
    )

    if (reference) {
      observer.observe(reference)
    }

    return () => {
      observer.unobserve(reference)
    }
  }, [ref, rootMargin])

  return isIntersecting
}

// Usage
function App() {
  // Ref for the element that we want to detect whether on screen
  const ref: any = useRef<HTMLDivElement>()

  // Call the hook passing in ref and root margin
  // In this case it would only be considered onScreen if more ...
  // ... than 300px of element is visible.
  const onScreen: boolean = useOnScreen<HTMLDivElement>(ref, '-300px')

  return (
    <div>
      <div style={{ height: '100vh' }}>
        <h1>Scroll down to next section 👇</h1>
      </div>
      <div
        ref={ref}
        style={{
          height: '100vh',
          backgroundColor: onScreen ? '#23cebd' : '#efefef'
        }}
      >
        {onScreen ? (
          <div>
            <h1 data-cy="hey">Hey I'm on the screen</h1>
            <img
              alt=""
              src="https://i.giphy.com/media/ASd0Ukj0y3qMM/giphy.gif"
            />
          </div>
        ) : (
          <h1 data-cy="scroll-down">
            Scroll down 300px from the top of this section 👇
          </h1>
        )}
      </div>
    </div>
  )
}

it('useOnScreen', () => {
  mount(<App />)
  cy.getByCy('scroll-down').should('be.visible')
  cy.getByCy('hey').should('not.exist')

  cy.scrollTo(0, 300)
  cy.getByCy('hey').should('be.visible')
  cy.getByCy('scroll-down').should('not.exist')
})
