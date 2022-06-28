import React from 'react'

import User from './user'

it('can stub fetch at window level using cy.stub(window, fetch)', () => {
  const fakeUser = {
    name: 'Joni Baez',
    age: '32',
    address: '123, Charming Avenue'
  }

  // cy.window().then((window) => { // makes no difference, because window is available globally
  cy.stub(window, 'fetch')
    .withArgs('/123')
    .resolves({
      json: () => Promise.resolve(fakeUser) // or just fakeUser without promise
    })
  // })

  cy.mount(<User id={123} />)
  cy.contains('summary', fakeUser.name).click()
  cy.contains('strong', fakeUser.age).should('be.visible')
  cy.contains(fakeUser.address)
})
