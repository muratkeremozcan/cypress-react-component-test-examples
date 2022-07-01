import Todos from './Todos'
import './styles.css'

const populateTodos = () => {
  cy.wrap(['buy milk', 'buy eggs', 'buy bread']).each((todo) => {
    cy.get('input').type(todo)
    return cy.get('form > .btn').click()
  })
}

describe('useReducer Todos', () => {
  beforeEach('add 3 todos', () => {
    cy.mount(<Todos />)

    populateTodos()
  })

  it('should delete a todo', () => {
    cy.getByCy('delete-buy eggs').click()

    cy.getByCy('buy milk').should('exist')
    cy.getByCy('buy eggs').should('not.exist')
    cy.getByCy('buy bread').should('exist')
  })

  it('should toggle a todo', () => {
    cy.getByCy('toggle-buy eggs').click()

    cy.getByCy('buy milk').should(
      'not.have.css',
      'text-decoration',
      'line-through'
    )
    cy.getByCy('buy eggs').should(
      'have.css',
      'text-decoration',
      'line-through solid rgb(0, 0, 0)'
    )
    cy.getByCy('buy bread').should(
      'not.have.css',
      'text-decoration',
      'line-through'
    )
  })

  it('should toggle all todos, delete them and add a new ones', () => {
    cy.getByCyLike('toggle').click({ multiple: true })
    Cypress._.times(3, () => cy.getByCyLike('delete').first().click())

    populateTodos()
    cy.getByCy('buy milk').should('exist')
    cy.getByCy('buy eggs').should('exist')
    cy.getByCy('buy bread').should('exist')
  })
})
