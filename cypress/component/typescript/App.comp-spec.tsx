import React from 'react'

import App from '../../../src/App'

// note: the tests can also be near the source code,
// but we have some other case by case examples that are easier to isolate
/*
{
  "baseUrl": "http://localhost:3000",
  "component": {
    "testFiles": ...
    "componentFolder": "src"
  }
}
*/

it('renders learn react link', () => {
  cy.mount(<App />)
  cy.get('a').contains('Learn React')
})

describe('Alias', () => {
  const Greeting = () => <div>Hello!</div>
  const GreetingCard = (props: {
    name:
      | boolean
      | React.ReactChild
      | React.ReactFragment
      | React.ReactPortal
      | null
      | undefined
  }) => <div>Hello {props.name}</div>

  it('default alias is the component name', () => {
    cy.mount(<Greeting />)
    cy.get('@Greeting').its('props').should('be.empty')
    cy.get('@Greeting').its('type').should('eq', Greeting)
  })

  it('the default alias can be overwritten', () => {
    cy.mount(<GreetingCard name="World" />, { alias: 'Hello' })
    cy.get('@Hello').its('props').should('deep.equal', { name: 'World' })
    cy.get('@Hello').its('props').should('contain', { name: 'World' })
  })
})

describe('mount in beforeEach', () => {
  const Hello: React.FC<{}> = ({ children }) => (
    <>
      <div className="hello">Hello there!</div>
      {children}
    </>
  )

  beforeEach(() => {
    cy.mount(
      <>
        <Hello>
          <div className="inside">Inner div</div>
        </Hello>
      </>
    )
  })

  it('can mount the component before each test', () => {
    cy.get('.hello').should('be.visible').contains('Hello there!')
  })

  it('can access the child component', () => {
    cy.get('.inside').should('be.visible').contains('Inner div')
  })
})
