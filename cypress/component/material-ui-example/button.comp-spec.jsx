import React from 'react'

import Button from '@material-ui/core/Button'

it('renders a button', () => {
  cy.mount(
    <Button variant="contained" color="primary">
      Hello World
    </Button>
  )
})

it('renders a button with an icon', () => {
  cy.mount(
    <Button variant="outlined" color="secondary" startIcon="⛹️">
      Hello World
    </Button>
  )
})
