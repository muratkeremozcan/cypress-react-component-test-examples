import 'cypress-axe'

function InaccessibleForm() {
  return (
    <form>
      <input placeholder="email" />
    </form>
  )
}

function AccessibleForm() {
  return (
    <form>
      <label htmlFor="username">Username</label>
      <input id="username" placeholder="username" />
    </form>
  )
}

// https://www.npmjs.com/package/cypress-axe
//  "minor", "moderate", "serious", "critical"
it.skip('inaccessible forms fail axe (will fail)', () => {
  cy.mount(<InaccessibleForm />)
  cy.injectAxe()

  // checks all violations
  // cy.checkAlly() /

  cy.checkA11y(null, {
    // checks only the filtered kind of violations
    includedImpacts: ['moderate', 'serious']
  })
})

it.skip('accessible forms pass axe', () => {
  cy.mount(<AccessibleForm />)
  cy.injectAxe()
  cy.checkA11y(null, {
    includedImpacts: ['minor', 'critical']
  })
})

// 1:1 comparison with RTL
// https://github.com/muratkeremozcan/epic-react-testingJs/blob/main/testing-js/03.rtl/src/__tests__/07.a11y.js
