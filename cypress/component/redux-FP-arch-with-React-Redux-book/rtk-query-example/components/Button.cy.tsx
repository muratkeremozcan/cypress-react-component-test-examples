import Button from './Button'

describe('Button', () => {
  it('should contain button name', () => {
    const btnName = 'I am a button'
    cy.mount(<Button>{btnName}</Button>)
    cy.contains('button', btnName)
  })
})
