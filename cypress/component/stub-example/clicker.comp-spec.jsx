/// <reference types="cypress" />
import React from 'react'

describe('You can pass a cy.stub as a property to the mounted component and then assert it was invoked', () => {
  describe('clicker', () => {
    const Clicker = ({ click }) => (
      <div>
        <button onClick={click}>Click me</button>
      </div>
    )

    it('calls the click property twice', () => {
      const onClick = cy.stub().as('clicker')

      cy.mount(<Clicker click={onClick} />)

      cy.get('button')
        .click()
        .click()
        .then(() => {
          // works in this case, but not recommended because https://on.cypress.io/then does not retry
          expect(onClick).to.be.calledTwice
        })
        .should(() => {
          // will auto-retry with should
          expect(onClick).to.be.calledTwice
        })

      // either will auto-retry the stub until it was called twice
      cy.wrap(onClick).should('have.been.calledTwice')
      cy.get('@clicker').should('have.been.calledTwice')
    })
  })

  describe('Clicker with delay', () => {
    const Clicker = ({ click }) => {
      return (
        <div>
          <button onClick={() => setTimeout(click, 500)}>Click me</button>
        </div>
      )
    }

    it('calls the click property twice', () => {
      const onClick = cy.stub().as('clicker')

      cy.mount(<Clicker click={onClick} />)

      cy.get('button')
        .click()
        .click()
        // .then(() => {
        //   // would fail because no retry
        //   expect(onClick).to.be.calledTwice
        // })
        .should(() => {
          // will auto-retry with should
          expect(onClick).to.be.calledTwice
        })

      // either will auto-retry the stub until it was called twice
      cy.wrap(onClick).should('have.been.calledTwice')
      cy.get('@clicker').should('have.been.calledTwice')
    })
  })
})
