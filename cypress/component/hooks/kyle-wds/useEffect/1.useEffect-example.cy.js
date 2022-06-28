// www.youtube.com/watch?v=0ZJgIjIuY7U

import App from './1.useEffect-example'

describe('useEffect', () => {
  it('should set each resourceType', () => {
    cy.mount(<App />)
    ;['Posts', 'Users', 'Comments'].forEach((button) => {
      cy.getByCy(button.toLowerCase()).click()
      cy.getByCy('resource-type').contains(button)
      cy.getByCyLike('item-', {timeout:10000}).should('have.length.gte', 10)
    })
  })
})
