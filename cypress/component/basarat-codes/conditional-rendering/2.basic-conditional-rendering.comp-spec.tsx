import { useState } from 'react'
import './App.css'

it('should operate basic counter', () => {
  function App() {
    const [count, setCount] = useState(0)
    const inc = () => setCount((clicks) => clicks + 1)
    const dec = () => setCount((clicks) => clicks - 1)

    return (
      <div className="App">
        <div>
          <button data-cy="inc" onClick={inc}>
            +
          </button>
          <button data-cy="dec" onClick={dec}>
            -
          </button>
          <p data-cy="count">Count: {count}</p>
        </div>
      </div>
    )
  }

  cy.mount(<App />)
  cy.getByCy('count').should('contain', 'Count: 0')
  cy.getByCy('inc').dblclick()
  cy.getByCy('count').should('contain', 'Count: 2')

  cy.getByCy('dec').dblclick().dblclick()
  cy.getByCy('count').should('contain', 'Count: -2')
})

it('should operate basic toggler', () => {
  function App() {
    const [isShown, setIsShown] = useState(false)
    const toggle = () => setIsShown((shown) => !shown)

    return (
      <div className="App">
        <button onClick={toggle} data-cy="toggle">
          Toggle
        </button>
        {/* prefer && over ternary */}
        {isShown && <p data-cy="content">Conditional Content</p>}
        {isShown ? <p data-cy="content">Conditional Content</p> : null}
      </div>
    )
  }

  cy.mount(<App />)
  cy.getByCy('content').should('not.exist')
  cy.getByCy('toggle').click()
  cy.getByCy('content').should('be.visible')
  cy.getByCy('toggle').click()
  cy.getByCy('content').should('not.exist')
})

it('should load & clear user', () => {
  type User = { name: string } | null
  function App() {
    const [user, setUser] = useState<User>(null)
    const load = () => setUser({ name: 'Jane' })
    const clear = () => setUser(null)

    return (
      <div className="App">
        <button onClick={load} data-cy="load">
          Load
        </button>
        <button onClick={clear} data-cy="clear">
          Clear
        </button>
        {/* prefer && over ternary */}
        {user && <p data-cy="user">{user.name}</p>}
        {user ? <p data-cy="user">{user.name}</p> : null}
      </div>
    )
  }

  cy.mount(<App />)
  cy.getByCy('user').should('not.exist')
  cy.getByCy('load').click()
  cy.getByCy('user').should('contain', 'Jane')
  cy.getByCy('clear').click()
  cy.getByCy('user').should('not.exist')
})
