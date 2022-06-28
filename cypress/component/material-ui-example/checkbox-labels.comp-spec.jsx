import React from 'react'

import CheckboxLabels from './checkbox-labels'

it('renders checkboxes', () => {
  cy.viewport(600, 600)
  cy.mount(<CheckboxLabels />)
})
