import { useState, useEffect } from 'react'

// Hook https://usehooks.com/useDebounce/
// T is a generic type for value parameter, our case this will be string
function useDebounce<T>(value: T, delay: number): T {
  // State and setters for debounced value
  const [debouncedValue, setDebouncedValue] = useState<T>(value)
  useEffect(
    () => {
      // Update debounced value after delay
      const handler = setTimeout(() => {
        setDebouncedValue(value)
      }, delay)
      // Cancel the timeout if value changes (also on delay change or unmount)
      // This is how we prevent debounced value from updating if value is changed ...
      // .. within the delay period. Timeout gets cleared and restarted.
      return () => {
        clearTimeout(handler)
      }
    },
    [value, delay] // Only re-call effect if value or delay changes
  )
  return debouncedValue
}

// API search function
function searchCharacters(search: string): Promise<any[]> {
  const publicKey = 'f86e8b52f6159704fdd497ec8830eba7'
  const privateKey = 'f11f1d4c6df13e2592421ece5ef588540e634182'
  return fetch(
    `https://gateway.marvel.com/v1/public/comics?apikey=${publicKey}&hash=${privateKey}&titleStartsWith=${search}`,
    {
      method: 'GET'
    }
  )
    .then((r) => r.json())
    .then((r) => r.data.results)
    .catch((error) => {
      console.error(error)
      return []
    })
}

// Usage
function App() {
  // State and setters for ...
  // Search term
  const [searchTerm, setSearchTerm] = useState<string>('')
  // API search results
  const [results, setResults] = useState<any[]>([])
  // Searching status (whether there is pending API request)
  const [isSearching, setIsSearching] = useState<boolean>(false)
  // Debounce search term so that it only gives us latest value ...
  // ... if searchTerm has not been updated within last 500ms.
  // The goal is to only have the API call fire when user stops typing ...
  // ... so that we aren't hitting our API rapidly.
  // We pass generic type, this case string
  const debouncedSearchTerm: string = useDebounce<string>(searchTerm, 500)
  // Effect for API call
  useEffect(
    () => {
      if (debouncedSearchTerm) {
        setIsSearching(true)
        searchCharacters(debouncedSearchTerm).then((results) => {
          setIsSearching(false)
          setResults(results)
        })
      } else {
        setResults([])
      }
    },
    [debouncedSearchTerm] // Only call effect if debounced search term changes
  )
  return (
    <div>
      <input
        placeholder="Search Marvel Comics"
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      {isSearching && <div>Searching ...</div>}
      {results.map((result) => (
        <div key={result.id}>
          <h4>{result.title}</h4>
          <img
            alt={result.image}
            src={`${result.thumbnail.path}/portrait_incredible.${result.thumbnail.extension}`}
          />
        </div>
      ))}
    </div>
  )
}

it('useDebounce', () => {
  // spy on cy.intercept
  cy.intercept(
    'GET',
    'https://gateway.marvel.com/v1/public/*',
    cy.spy().as('networkSpy')
  ).as('apiCall')

  cy.mount(<App />)

  cy.get('input').type('iron', { delay: 0 })
  cy.wait('@apiCall')
  cy.get('@networkSpy').should('have.been.calledOnce')

  cy.get('input').clear().type('ir', { delay: 600 })
  cy.wait('@apiCall')
  cy.get('@networkSpy').should('have.been.calledThrice')
})
