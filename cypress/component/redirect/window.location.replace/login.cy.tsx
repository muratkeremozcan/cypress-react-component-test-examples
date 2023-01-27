import { LoginBtn, Location } from './login'

it('should deal with win.location.replace', () => {
  // how would we do the same workaround in a component test?
  // we stub the common object Location instead
  // https://glebbahmutov.com/blog/stub-react-import/#move-the-side-effect

  cy.stub(Location, 'assign').as('assign')

  cy.mount(<LoginBtn />)

  cy.getByCy('login-button').click()
  cy.get('@assign').should('have.been.calledOnceWith', 'https://www.cypress.io')
})
