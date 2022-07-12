import EffectOnceComponent from './EffectOnceComponent'

it('useEffectOnce', () => {
  cy.on('window:alert', cy.stub().as('alert'))
  cy.mount(<EffectOnceComponent />)

  cy.get('button').click().click()
  cy.get('@alert').should('have.been.calledOnce')
})
