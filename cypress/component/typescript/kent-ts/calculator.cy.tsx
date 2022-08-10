import Calculator from './calculator'

it('should', () => {
  cy.mount(
    <>
      <Calculator left={1} operator="+" right={2} />
      <Calculator left={1} operator="-" right={2} />
      <Calculator left={1} operator="*" right={2} />
      <Calculator left={1} operator="/" right={2} />
    </>
  )

  cy.contains('code', '1 + 2 = 3')
  cy.contains('code', '1 - 2 = -1')
  cy.contains('code', '1 * 2 = 2')
  cy.contains('code', '1 / 2 = 0.5')
})
