import { atom, useAtom, Provider } from 'jotai'
import type { Atom, PrimitiveAtom } from 'jotai'
import { focusAtom } from 'jotai-optics'
import { splitAtom, selectAtom } from 'jotai/utils'

const initialData = {
  people: [
    {
      name: 'Luke Skywalker',
      information: { height: 172 },
      siblings: ['John Skywalker', 'Doe Skywalker']
    },
    {
      name: 'C-3PO',
      information: { height: 167 },
      siblings: ['John Doe', 'Doe John']
    }
  ],
  films: [
    {
      title: 'A New Hope',
      planets: ['Tatooine', 'Alderaan']
    },
    {
      title: 'The Empire Strikes Back',
      planets: ['Hoth']
    }
  ],
  info: {
    tags: ['People', 'Films', 'Planets', 'Titles']
  }
}

const dataAtom = atom(initialData)

// focusAtom creates a new atom, based on the focus that you pass to it
const peopleAtom = focusAtom(dataAtom, (optic) => optic.prop('people'))

const readOnlyInfoAtom = atom((get) => get(dataAtom).info)

type PersonData = {
  name: string
  information: { height: number }
  siblings: string[]
}

type PersonProps = {
  personAtom: PrimitiveAtom<PersonData>
}
const Person = ({ personAtom }: PersonProps) => {
  const [person] = useAtom(personAtom)
  return <div>{person.name}</div>
}

const People = () => {
  // splitAtom utility is useful when you want to get an atom for each element in a list.
  const [peopleAtoms] = useAtom(splitAtom(peopleAtom as any) as Atom<PrimitiveAtom<PersonData>[]>)
  return (
    <div>
      {peopleAtoms.map((personAtom) => (
        <Person key={`${personAtom}`} personAtom={personAtom} />
      ))}
    </div>
  )
}

type TagProps = {
  tagAtom: Atom<string>
}
const Tag = ({ tagAtom }: TagProps) => {
  const [tag] = useAtom(tagAtom)
  return <div>{tag}</div>
}

type InfoData = {
  tags: string[]
}
const Tags = () => {
  const tagsSelector = (s: InfoData) => s.tags
  // creates a derived atom whose value is a function of the original atom's value
  const tagsAtom = selectAtom(readOnlyInfoAtom, tagsSelector)
  const tagsAtomsAtom = splitAtom(tagsAtom)
  const [tagAtoms] = useAtom(tagsAtomsAtom)
  return (
    <div>
      {tagAtoms.map((tagAtom) => (
        <Tag key={`${tagAtom}`} tagAtom={tagAtom} />
      ))}
    </div>
  )
}

const App = () => {
  return (
    <Provider>
      <div>
        <h2>People</h2>
        <People />
        <h2>Tags</h2>
        <Tags />
      </div>
    </Provider>
  )
}

// console errors not looking good
it.skip('focusAtom, splitAtom, selectAtom', () => {
  cy.mount(<App />)
  cy.contains('Luke Skywalker')
  cy.contains('C-3PO')

  cy.contains('Films')
  cy.contains('Planets')
  cy.contains('Planets')
  cy.contains('Titles')
})
