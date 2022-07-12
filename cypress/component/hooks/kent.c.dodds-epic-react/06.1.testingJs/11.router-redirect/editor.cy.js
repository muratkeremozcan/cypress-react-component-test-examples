import Editor from './editor'
import spok from 'cy-spok'

const fakeUser = { id: 'user-1' }
const fakePost = {
  title: 'Test title',
  content: 'Test content',
  tags: ['tag1', 'tag2']
}

Cypress.on('uncaught:exception', () => false)

it('renders a form with title, content, tags, and a submit button - stub window fetch', () => {
  cy.stub(window, 'fetch').resolves({ ok: true }).as('fetch')
  cy.mount(<Editor user={fakeUser} />)

  cy.get('#title-input').type(fakePost.title)
  cy.get('#content-input').type(fakePost.content)
  cy.get('#tags-input').type(fakePost.tags.join(','))

  cy.get('button').click()
  cy.get('button').should('be.disabled')
  cy.get('@fetch')
    .should('have.been.calledOnce')
    .its('args.0.1.body')
    .should(
      spok({
        toString: () => ({ ...fakePost, ...fakeUser })
      })
    )
})

it('renders a form with title, content, tags, and a submit button - stub network', () => {
  cy.intercept({
    method: 'POST',
    url: '**/post/*'
  }).as('post')
  cy.mount(<Editor user={fakeUser} />)

  cy.get('#title-input').type(fakePost.title)
  cy.get('#content-input').type(fakePost.content)
  cy.get('#tags-input').type(fakePost.tags.join(','))

  cy.get('button').click()
  cy.wait('@post')
  cy.get('button').should('be.disabled')
})

// 1:1 comparison with RTL
// https://github.com/muratkeremozcan/epic-react-testingJs/blob/main/testing-js/03.rtl/src/__tests__/12.KEY.tdd-04-router-redirect.js
