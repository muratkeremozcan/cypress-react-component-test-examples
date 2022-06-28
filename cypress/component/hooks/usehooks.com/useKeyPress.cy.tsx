import { useState, useEffect, useCallback } from 'react'

function useKeyPress(targetKey: string): boolean {
  // State for keeping track of whether key is pressed
  const [keyPressed, setKeyPressed] = useState(false)

  // If pressed key is our target key then set to true
  const downHandler = useCallback(
    ({ key }) => {
      if (key === targetKey) setKeyPressed(true)
    },
    [targetKey]
  )

  // If released key is our target key then set to false
  const upHandler = useCallback(
    ({ key }) => {
      if (key === targetKey) setKeyPressed(false)
    },
    [targetKey]
  )

  // Add event listeners
  useEffect(() => {
    window.addEventListener('keydown', downHandler)
    window.addEventListener('keyup', upHandler)

    // remove event listeners on cleanup
    return () => {
      window.removeEventListener('keydown', downHandler)
      window.removeEventListener('keyup', upHandler)
    }
  }, [downHandler, upHandler]) // Empty array ensures that effect is only run on mount and unmount

  return keyPressed
}

function App() {
  // Call our hook for each key that we'd like to monitor
  const happyPress = useKeyPress('a')
  const sadPress = useKeyPress('b')
  const robotPress = useKeyPress('c')

  return (
    <div>
      <div>press a b c</div>
      <input type="text" name="happy" />
      <div data-cy="press">
        {happyPress && '😊'}
        {sadPress && '😢'}
        {robotPress && '🤖'}
      </div>
    </div>
  )
}

it('useKeyPress', () => {
  cy.document().then((doc) => {
    doc.addEventListener('keydown', cy.spy().as('keydown'))
    doc.addEventListener('keyup', cy.spy().as('keyup'))
  })
  cy.mount(<App />)
  cy.get('input').type('abc')

  cy.get('@keydown').should('have.been.calledThrice')
  cy.get('@keyup').should('have.been.called')
})
