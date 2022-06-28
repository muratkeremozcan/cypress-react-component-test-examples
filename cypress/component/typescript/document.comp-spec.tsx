/// <reference types="cypress" />
import React from 'react'

// example from https://github.com/bahmutov/cypress-react-unit-test/issues/52
const DocumentTest = ({ reportHeight }) => (
  <div>
    <button
      onClick={() =>
        reportHeight(
          document.documentElement.clientHeight,
          document.body.clientHeight
        )
      }
    >
      Report height
    </button>
  </div>
)

describe('DocumentTest', () => {
  it('has valid dimensions', () => {
    const reportStub = cy.stub().as('report')

    cy.mount(<DocumentTest reportHeight={reportStub} />)
    cy.get('button').click()
    cy.get('@report')
      .should('have.been.called')
      .its('firstCall.args')
      .then(([docElementHeight, docBodyHeight]) => {
        expect(docElementHeight)
          // @ts-ignore
          .to.be.gt(0)
          .and.equal(Cypress.config('viewportHeight'))

        // contains a single DIV, so probably more than 10px
        // @ts-ignore
        expect(docBodyHeight).to.be.gt(10)
      })
  })
})
