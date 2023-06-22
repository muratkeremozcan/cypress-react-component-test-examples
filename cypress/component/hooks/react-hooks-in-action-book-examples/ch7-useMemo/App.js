import { useState, useMemo, useCallback } from 'react'
import './styles.css'
import { getAnagrams, getDistinct } from './anagrams'

function ResetButton({ onReset }) {
  console.log('ResetButton rendering...')
  return (
    <button data-cy="reset" onClick={onReset}>
      Reset
    </button>
  )
}

export default function App() {
  const [sourceText, setSourceText] = useState('ball')
  const [useDistinct, setUseDistinct] = useState(false)
  const [showAnagrams, setShowAnagrams] = useState(false)
  const [defaultText, setDefaultText] = useState('abc') // default text is now a state variable

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

  // useMemo is used when you want to memoize expensive computations.
  // That is, if you have a function that performs complex calculations
  // and you don't want to re-run these calculations on every render, you can use useMemo.
  // useMemo will only recompute the memoized value when one of the dependencies has changed.

  // useCallback is used when you want to prevent unnecessary re-creation of functions.
  // In JS, a new function instance is created every time a component re-renders.
  // This can lead to unnecessary re-renders in child components if these functions are passed as props.
  // To prevent this, you can use useCallback to return a memoized version of the callback function
  // that only changes if one of the dependencies has changed.

  // useMemo when you have expensive computations that you don't want to perform on every render,
  // useCallback when you have functions that are passed as props to child components and you want to avoid
  // unnecessary re-renders of those child components.

  // In this code, the ResetButton component is a child component of App that receives resetSourceText as a prop.
  // By using useCallback, we ensure that resetSourceText doesn't change between renders unless its dependencies change
  // so ResetButton doesn't re-render unnecessarily.
  const resetSourceText = useCallback(() => {
    setSourceText(defaultText)
  }, [defaultText])

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

      <label>
        Default text:
        <input
          value={defaultText}
          data-cy="default-text"
          onChange={(e) => setDefaultText(e.target.value)}
        />
      </label>

      <ResetButton onReset={resetSourceText} />
    </div>
  )
}
