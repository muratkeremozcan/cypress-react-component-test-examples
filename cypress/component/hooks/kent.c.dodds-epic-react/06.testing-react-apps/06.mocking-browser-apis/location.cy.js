import Location from './location'
// https://glebbahmutov.com/blog/cypress-geolocation/#investigation
it('displays the users current location', () => {
  const fakePosition = {
    coords: {
      latitude: 35,
      longitude: 139
    }
  }

  cy.window().then((win) =>
    cy
      .stub(win.navigator.geolocation, 'getCurrentPosition')
      .callsArgWith(0, fakePosition)
      .as('getCurrentPosition')
  )

  cy.mount(<Location />)

  cy.contains(fakePosition.coords.latitude)
  cy.contains(fakePosition.coords.longitude)
})

// get Gleb's opinion on this
it('throws error message when geolocation is not supported', () => {
  const fakeError = new Error(
    'Geolocation is not supported or permission denied'
  )
  const { match } = Cypress.sinon

  cy.window().then((win) =>
    cy
      .stub(win.navigator.geolocation, 'getCurrentPosition')
      .withArgs(match.object)
      .throws(fakeError)
      .as('getCurrentPosition')
  )

  cy.mount(<Location />)
  expect(() => win.navigator.geolocation.getCurrentPosition()).to.throw()
})

// 1:1 comparison with RTL
// https://github.com/muratkeremozcan/epic-react-testingJs/blob/main/epic-react/06.testing-react-apps/src/__tests__/exercise/06.js
