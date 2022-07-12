import TranslationComponent from './TranslationComponent'

it('useTranslation', () => {
  cy.mount(<TranslationComponent />)

  cy.getByCy('spanish').click()
  cy.contains('sp')
  cy.contains('Hola')
  cy.contains('Esi')
  cy.contains('Test EN')
  cy.contains('kaka') // if translation and fallback isn't available, use the key

  cy.getByCy('english').click()
  cy.contains('en')
  cy.contains('Hello')
  cy.contains('Goodbye')
  cy.contains('Test EN')
  cy.contains('kaka')
})
