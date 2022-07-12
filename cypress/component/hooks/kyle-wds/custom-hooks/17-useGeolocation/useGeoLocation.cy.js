import GeolocationComponent from './GeolocationComponent'

describe('useGeolocation', () => {
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
        // .callsFake((onSuccess, onError) => onSuccess(fakePosition))  // same thing
        .as('getCurrentPosition')
    )

    /*
			https://www.youtube.com/watch?v=zR6o_tdJKDk&t=59s
			withArgs : controls when the stub is used
			callsArg : CallsArg is the response like calling the callback argument to the stub
			callsArgWith : Like callsArg, but with arguments to pass to the callback.
		*/

    cy.mount(<GeolocationComponent />)

    cy.get('@getCurrentPosition').should('be.called')
    cy.contains(fakePosition.coords.latitude)
    cy.contains(fakePosition.coords.longitude)
  })

  // it('throws error message when geolocation is not supported', () => {
  //   const fakeError = new Error(
  //     'Geolocation is not supported or permission denied'
  //   )

  //   cy.window().then((win) =>
  //     cy
  //       .stub(win.navigator.geolocation, 'getCurrentPosition')
  //       .callsArgWith(1, fakeError)
  //       //     .callsFake((onSuccess, onError) => onError(fakeError)) // same thing
  //       .as('getCurrentPosition')
  //   )

  //   cy.mount(<GeolocationComponent />)
  //   cy.get('@getCurrentPosition').should('be.called')
  //   cy.contains('Geolocation is not supported or permission denied')
  // })
})
