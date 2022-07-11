import EventListenerComponent from './EventListenerComponent'

it('useEventListener', () => {
  cy.mount(<EventListenerComponent />)

  cy.getByCy('last-key')
    .trigger('keydown', { key: 'f' })
    .trigger('keydown', { key: 'b' })
  cy.getByCy('last-key').contains('b')
})
