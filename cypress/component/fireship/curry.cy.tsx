// Jeff Delaney 10 React Anti-patterns to Avoid, try curry
// https://www.youtube.com/watch?v=b0IZo2Aho9Y&list=FL8lPlH6RrRLc4sYhAE6f3JQ&index=31&t=460s

import { mount } from '@cypress/react'

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
      <input data-cy="input-2" onChange={handleIt(3)}></input>
    </>
  )
}

describe('with curry', () => {
  const testIt = () => {
    cy.getByCyLike('input').each(($input) => cy.wrap($input).type('a'))
    return cy.get('@log').should('have.been.called', 'thrice')
  }

  beforeEach('spy on console.log', () =>
    cy
      .window()
      .its('console')
      .then((console) => cy.spy(console, 'log').as('log'))
  )

  it('should not code this', () => {
    mount(<NotThis />)
    testIt()
  })

  it('should code this', () => {
    mount(<CodeThis />)
    testIt()
  })
})
