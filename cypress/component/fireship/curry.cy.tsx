// Jeff Delaney 10 React Anti-patterns to Avoid, try curry
// https://www.youtube.com/watch?v=b0IZo2Aho9Y&list=FL8lPlH6RrRLc4sYhAE6f3JQ&index=31&t=460s

const NotThis = () => {
  const handleIt = (e: any, v: number) => console.log(e, v)

  return (
    <>
      <input data-cy="input-1" onChange={(e) => handleIt(e, 1)}></input>
      <input data-cy="input-2" onChange={(e) => handleIt(e, 2)}></input>
      <input data-cy="input-3" onChange={(e) => handleIt(e, 3)}></input>
    </>
  )
}

const CodeThis = () => {
  // the outer function takes our custom argument,
  // the inner function waits for an arg (the event) to be passed in
  const handleIt = (v: number) => (e: any) => console.log(e, v)

  return (
    <>
      <input data-cy="input-1" onChange={handleIt(1)}></input>
      <input data-cy="input-2" onChange={handleIt(2)}></input>
      <input data-cy="input-3" onChange={handleIt(3)}></input>
    </>
  )
}

describe('with curry', () => {
  const { _ } = Cypress
  const randomChar = (n = 1) =>
    _.times(n, () => _.random(35).toString(36)).join('')

  const testIt = () => {
    cy.getByCyLike('input').each(($input) => cy.wrap($input).type(randomChar()))
    return cy.get('@log').should('have.been.called', 'thrice')
  }

  // spy on console.log
  beforeEach(() =>
    cy
      .window()
      .its('console')
      .then((console) => cy.spy(console, 'log').as('log'))
  )

  it('should not code this', () => {
    cy.mount(<NotThis />)
    testIt()
  })

  it('should code this', () => {
    cy.mount(<CodeThis />)
    testIt()
  })
})
