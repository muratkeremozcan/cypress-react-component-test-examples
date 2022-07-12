import Location from './location'
// https://glebbahmutov.com/blog/cypress-geolocation/#investigation
describe('geoLocation', () => {
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

    cy.get('@getCurrentPosition').should('be.called')
    cy.contains(fakePosition.coords.latitude)
    cy.contains(fakePosition.coords.longitude)
  })

  it('throws error message when geolocation is not supported', () => {
    const fakeError = new Error(
      'Geolocation is not supported or permission denied'
    )

    cy.window().then((win) =>
      cy
        .stub(win.navigator.geolocation, 'getCurrentPosition')
        .callsArgWith(1, fakeError)
        .as('getCurrentPosition')
    )

    cy.mount(<Location />)
    cy.get('@getCurrentPosition').should('be.called')
    cy.contains('Geolocation is not supported or permission denied')
  })
})
// 1:1 comparison with RTL
// https://github.com/muratkeremozcan/epic-react-testingJs/blob/main/epic-react/06.testing-react-apps/src/__tests__/exercise/06.js
