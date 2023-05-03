import { atom, useAtom } from 'jotai'
import { atomFamily } from 'jotai/utils'

it('atomFamily with strings', () => {
  const textFamily = atomFamily((name) => atom(name))

  const TextView = ({ name }) => {
    const [text] = useAtom(textFamily(name))
    return <div data-cy={text}>{text as string}</div>
  }

  function AtomFamilyWithStrings() {
    return (
      <div>
        <h1>Atom Family Example 1</h1>
        <TextView name="Alice" />
        <TextView name="Bob" />
        <TextView name="Charlie" />
      </div>
    )
  }

  cy.mount(<AtomFamilyWithStrings />)

  cy.getByCy('Alice')
  cy.getByCy('Bob')
  cy.getByCy('Charlie')
})
