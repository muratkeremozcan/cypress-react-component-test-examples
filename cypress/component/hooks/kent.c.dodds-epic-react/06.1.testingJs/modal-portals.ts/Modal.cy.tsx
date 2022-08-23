import ModalYesNo from './ModalYesNo'

describe('ModalYesNo', () => {
  it('should', () => {
    cy.mount(<ModalYesNo />)

    cy.get('button').click()
    cy.contains("I'm a modal!")

    cy.contains('button', 'close').click()
  })
})
