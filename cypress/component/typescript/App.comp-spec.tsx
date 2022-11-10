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

describe('mount in beforeEach', () => {
  const Hello = ({ children }) => (
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
