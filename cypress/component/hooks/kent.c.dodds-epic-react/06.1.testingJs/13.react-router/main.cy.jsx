import Main from './Main'
import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

it('main renders about and home and I can navigate to those pages', () => {
  // TODO: ask DX how we can use a Switch instead of Routes in the component
  // using Switch instead of Routes breaks the test
  cy.mount(
    <Router>
      <>
        <Main />
      </>
    </Router>
  )

  cy.contains('About').click().location('pathname').should('equal', '/about')

  cy.contains('Home').click().location('pathname').should('equal', '/')
})

// 1:1 comparison with RTL
// https://github.com/muratkeremozcan/epic-react-testingJs/blob/main/testing-js/03.rtl/src/__tests__/13.KEY.react-router-02.js
