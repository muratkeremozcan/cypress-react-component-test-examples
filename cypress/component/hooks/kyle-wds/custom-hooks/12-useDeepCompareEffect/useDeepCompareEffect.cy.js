import DeepCompareEffectComponent from './DeepCompareEffectComponent'

it('useDeepCompareEffect', () => {
  cy.mount(<DeepCompareEffectComponent />)

  cy.contains('Increment Age').dblclick().dblclick()
  cy.contains('Increment Other Count').dblclick().dblclick()

  cy.contains('useEffect: 9')
  cy.contains('useDeepCompareEffect: 9')

  cy.contains('Other Count: 4')
  cy.contains('{"age":4,"name":"Kyle"}')
})
