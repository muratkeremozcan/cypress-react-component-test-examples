import { mount } from '@cypress/react'
import { useState } from 'react'

it('toggles bold with no selection via keyboard shortcuts', () => {
  function Test() {
    const [value, setValue] = useState(0)
    const handleChange = (newValue) => setValue(newValue)
    return <div value={value} onChange={handleChange} div />
  }
  mount(<Test />)

  cy.get('[data-test-key*="rich-text"] [contenteditable]').first().click()
  cy.get('body').type('{meta+b}Hello')

  cy.get('[data-test-key*="rich-text"] [contenteditable]').should(
    'have.text',
    'Hello'
  )
  cy.get('[data-test-key*="rich-text"] [contenteditable] strong').should(
    'exist'
  )
})
