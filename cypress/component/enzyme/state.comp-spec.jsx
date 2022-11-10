/// <reference types="cypress" />
import React from 'react'

class Foo extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      count: 0
    }
  }

  componentDidMount() {
    console.log('componentDidMount called')
  }

  componentDidUpdate() {
    console.log('componentDidUpdate called')
  }

  render() {
    const { id, foo } = this.props

    return (
      <div className={id}>
        {foo} count {this.state.count}
      </div>
    )
  }
}

describe('Enzyme setState', () => {
  it('get component reference using ref, then get & set component state,', () => {
    // get the component reference using "ref" prop
    // and place it into the component object for Cypress to "wait" for it
    let comp = {}

    cy.mount(<Foo id="foo" foo="initial" ref={(i) => (comp.instance = i)} />)

    cy.contains('initial').should('be.visible')

    cy.log('**check state**')
    cy.wrap(comp).its('instance.state').should('deep.equal', { count: 0 })

    cy.log('**set state**')
    cy.wrap(comp).its('instance').invoke('setState', { count: 10 })
    cy.wrap(comp).its('instance.state').should('deep.equal', { count: 10 })

    cy.contains('initial count 10')
  })
})

describe('Enzyme setProps', () => {
  it('mount the component with new props', () => {
    // There is no direct implementation of setProps, so mount the component with new props
    cy.mount(<Foo id="foo" foo="initial" />)
    cy.contains('initial').should('be.visible')

    cy.mount(<Foo id="foo" foo="second" />)
    cy.contains('second').should('be.visible')
  })

  it('If you want to reuse properties, you can clone the component', () => {
    const comp = <Foo id="foo" foo="initial" />
    cy.mount(comp)
    cy.contains('initial').should('be.visible')

    const cloned = Cypress._.cloneDeep(comp)
    // change a property, leaving the rest unchanged
    cloned.props.foo = 'second'
    cy.mount(cloned)
    cy.contains('second').should('be.visible')
  })
})
