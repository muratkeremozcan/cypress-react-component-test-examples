import App from './control-props'

const aRoundOfClicks = () => {
  cy.get(':nth-child(5) > label > .toggle-btn').dblclick() // no effect on count
  cy.get(':nth-child(1) > .toggle-btn').click()
  return cy.get(':nth-child(1) > :nth-child(2) > .toggle-btn').click()
}

it('should render', () => {
  cy.mount(<App />)

  aRoundOfClicks()
  cy.contains('Click count: 2')

  aRoundOfClicks()
  cy.contains('Click count: 4')

  aRoundOfClicks()
  cy.contains('Whoa')

  cy.get('button').click()
  aRoundOfClicks()
  cy.contains('Click count: 2')
})
