import { CSSProperties } from 'react'
import { useAtom, Provider } from 'jotai'
import { atomWithReducer } from 'jotai/utils'
import { isEqual } from 'lodash'

// creates atom that triggers updates when custom compare function areEqual(prev, next) is false.
function atomWithCompare<Value>(
  initialValue: Value,
  areEqual: (prev: Value, next: Value) => boolean
) {
  return atomWithReducer(initialValue, (prev: Value, next: Value) => {
    if (areEqual(prev, next)) {
      return prev
    }

    return next
  })
}

const styleAtom = atomWithCompare<CSSProperties>({ backgroundColor: 'blue' }, isEqual)

// In this example, we're using the atomWithCompare function to create a styleAtom with an initial value of { backgroundColor: 'blue' }
// and using isEqual as the  compare function.
// The StylePreview component uses this styleAtom to display a styled text
// and provides buttons to change the background color and font size.
// Clicking these buttons twice will only trigger one render, as the custom compare function prevents unnecessary updates.

const StylePreview = () => {
  const [styles, setStyles] = useAtom(styleAtom)

  return (
    <div>
      <div data-cy="subject" style={styles}>
        Style preview
      </div>

      {/* Clicking this button twice will only trigger one render */}
      <button onClick={() => setStyles({ ...styles, backgroundColor: 'red' })}>
        Set background to red
      </button>

      {/* Clicking this button twice will only trigger one render */}
      <button onClick={() => setStyles({ ...styles, fontSize: 32 })}>Enlarge font</button>
    </div>
  )
}

const App = () => {
  console.log('rendered')
  return (
    <Provider>
      <div>
        <h2>Style Preview with Custom Compare</h2>
        <StylePreview />
      </div>
    </Provider>
  )
}

it('atomWithCompare', () => {
  cy.window()
    .its('console')
    .then((console) => cy.spy(console, 'log').as('log'))
  cy.mount(<App />)
  cy.getByCy('subject').should('have.css', 'background-color', 'rgb(0, 0, 255)')

  cy.contains('Set background to red').dblclick()
  cy.getByCy('subject').should('have.css', 'background-color', 'rgb(255, 0, 0)')

  cy.getByCy('subject').should('have.css', 'font-size', '16px')
  cy.contains('Enlarge font').dblclick()
  cy.getByCy('subject').should('have.css', 'font-size', '32px')

  cy.get('@log').should('have.been.calledOnce')
})
