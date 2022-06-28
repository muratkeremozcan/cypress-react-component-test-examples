import './App.css'

function App() {
  return (
    <div className="App">
      <div>false: {false}</div>
      <div>null: {null}</div>
      <div>undefined: {undefined}</div>
      <div>'': {''}</div>
      <div>
        <p>React renders numeric falsy values</p>
        <div data-cy="0">0: {0}</div>
        <div data-cy="NaN">NaN: {NaN}</div>
      </div>
    </div>
  )
}

it('should render numeric falsy values', () => {
  cy.mount(<App />)
  cy.getByCy('0').should('contain', '0')
  cy.getByCy('NaN').should('contain', 'NaN')
})
