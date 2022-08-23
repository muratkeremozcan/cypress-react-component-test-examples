import DeepCompareEffectComponent from './DeepCompareEffectComponent'

it('useDeepCompareEffect', () => {
  cy.mount(<DeepCompareEffectComponent />)

  cy.contains('Increment Age').dblclick().dblclick()
  cy.contains('Increment Other Count').click().click()

  cy.contains('useEffect: 5')
  cy.contains('useDeepCompareEffect: 5')

  cy.contains('Other Count: 2')
  cy.contains('{"age":4,"name":"Kyle"}')
})
