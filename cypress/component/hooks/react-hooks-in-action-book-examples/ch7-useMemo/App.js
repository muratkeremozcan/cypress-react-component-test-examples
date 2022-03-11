import { useState, useMemo } from 'react'
import './styles.css'
import { getAnagrams, getDistinct } from './anagrams'

export default function App() {
  const [sourceText, setSourceText] = useState('ball')
  const [useDistinct, setUseDistinct] = useState(false)
  const [showAnagrams, setShowAnagrams] = useState(false)

  // [7.0] why useMemo?
  // you may have expensive functions that are called on every render
  // (10 letters, 10 factorial calls in this example, toggle any checkbox and check the console)
  // we shouldn’t generate the anagrams again if the user clicks either of the check boxes,
  // toggling between All and Distinct anagrams, or showing and hiding the list
  // we need a way of asking React to run the expensive functions only if their output is likely to be different
  // const anagrams = getAnagrams(sourceText)
  // const distinct = getDistinct(anagrams)

  // [7.1] use useMemo: const memoizedValue = useMemo(() => expensiveFunction(arg1, arg2), [arg1, arg2])
  // wrap expensive functions in useMemo and provide an array of dependencies
  // this way we use memoization; if the function is called with the same args, it returns the stored value.
  const anagrams = useMemo(() => getAnagrams(sourceText), [sourceText])
  const distinct = useMemo(() => getDistinct(anagrams), [anagrams])

  return (
    <div className="App">
      <h1>Anagrams</h1>
      <label htmlFor="txtPhrase">Enter some text to see its anagrams</label>
      <input
        type="text"
        value={sourceText}
        onChange={(e) => setSourceText(e.target.value.slice(0, 10))}
        data-cy="input"
      />

      <div data-cy="anagram-data" className="count">
        {useDistinct ? (
          <p>
            There are {distinct.length} distinct anagrams of "{sourceText}".
          </p>
        ) : (
          <p>
            There are {anagrams.length} anagrams of "{sourceText}".
          </p>
        )}
      </div>

      <p>
        <label>
          <input
            type="checkbox"
            checked={useDistinct}
            onChange={() => setUseDistinct((s) => !s)}
            data-cy="distinct"
          />
          Distinct
        </label>
      </p>
      <p>
        <label>
          <input
            type="checkbox"
            checked={showAnagrams}
            onChange={() => setShowAnagrams((s) => !s)}
            data-cy="show"
          />
          Show
        </label>
      </p>

      {showAnagrams && (
        <p data-cy="anagrams" className="anagrams">
          {distinct.map((a, i) => (
            <span key={i}>{a}</span>
          ))}
        </p>
      )}
    </div>
  )
}
