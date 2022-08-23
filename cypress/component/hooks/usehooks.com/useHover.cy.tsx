import { useRef, useState, useEffect, MutableRefObject } from 'react'

// Hook https://usehooks.com/useHover/
// T - could be any type of HTML element like: HTMLDivElement, HTMLParagraphElement and etc.
// hook returns tuple(array) with type [any, boolean]
function useHover<T>(): [MutableRefObject<T>, boolean] {
  const [value, setValue] = useState<boolean>(false)
  const ref: any = useRef<T | null>(null)
  const handleMouseOver = (): void => setValue(true)
  const handleMouseOut = (): void => setValue(false)

  useEffect(
    () => {
      const node = ref.current

      if (node) {
        node.addEventListener('mouseover', handleMouseOver)
        node.addEventListener('mouseout', handleMouseOut)
        return () => {
          node.removeEventListener('mouseover', handleMouseOver)
          node.removeEventListener('mouseout', handleMouseOut)
        }
      }
    },
    [ref.current] // Recall only if ref changes
  )
  return [ref, value]
}

// Usage
function App() {
  const [hoverRef, isHovered] = useHover()

  return (
    <>
      <div
        data-cy="smile"
        // @ts-expect-error
        ref={hoverRef}
        style={{
          color: 'white',
          padding: '8rem',
          width: '12rem',
          textAlign: 'center',
          fontSize: '5rem',
          backgroundColor: isHovered ? '#00e3e3' : '#ccc'
        }}
      >
        {isHovered ? '😁' : '☹️'}
      </div>
      <button>Click me</button>
    </>
  )
}

describe('useHover', () => {
  let mouseoverEventFired, mouseoutEventFired

  before(() => {
    cy.mount(<App />)
    mouseoverEventFired = false
    mouseoutEventFired = false

    cy.window().then((win) => {
      win.addEventListener('mouseover', () => (mouseoverEventFired = true))
      win.addEventListener('mouseout', () => (mouseoutEventFired = true))
    })
  })

  it('useHover', () => {
    cy.get('button', { timeout: 10000 }).should('be.visible').click()

    cy.getByCy('smile').should(
      'have.css',
      'background-color',
      'rgb(204, 204, 204)'
    )

    // @ts-ignore
    cy.getByCy('smile').click()
    cy.getByCy('smile').should(
      'have.css',
      'background-color',
      'rgb(0, 227, 227)'
    )

    // @ts-ignore
    cy.wrap().should((): void => {
      // @ts-ignore
      expect(mouseoverEventFired).to.eq(true)
      // @ts-ignore
      expect(mouseoutEventFired).to.eq(true)
    })
  })
})
