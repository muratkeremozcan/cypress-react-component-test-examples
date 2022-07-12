import LongPressComponent from './LongPressComponent'

it('useLongPress', () => {
  cy.on('window:alert', cy.spy().as('alert'))
  cy.mount(<LongPressComponent />)

  cy.getByCy('element').should('have.css', 'background-color', 'rgb(255, 0, 0)')

  cy.getByCy('element').click()
  cy.get('@alert').should('not.be.called')

  cy.getByCy('element').realMouseDown()
  cy.get('@alert').should('be.calledOnceWith', 'Long Press')
})
