import { lazy, useState, Suspense } from 'react'
import './styles.css'

// a lazy loaded component
const LazyDog = lazy(() =>
  import('./Dog').then(
    (comp) => new Promise((resolve) => setTimeout(() => resolve(comp), 500))
  )
)

// wrapper component, that shows LazyDog only after a user clicks a button
function DogWrapper() {
  const [isOn, setIsOn] = useState(false)

  return isOn ? (
    <LazyDog />
  ) : (
    <div>
      <button data-cy="show-dog" onClick={() => setIsOn(true)}>
        Show Dog
      </button>
    </div>
  )
}

// ch[11.0] lazy-suspense
// React provides an easy way to specify fallback UI: the Suspense component
// Use the Suspense component to wrap UI that contains one or more lazy components in its tree
// Once the internal component has loaded, it doesn’t need to load again,
// so clicking the second Show Dog button will immediately render the second Dog component
export default function App() {
  return (
    <div className="App">
      <main>Main App</main>
      <aside>
        <Suspense fallback={<div>Loading...</div>}>
          <DogWrapper />
        </Suspense>
        <Suspense fallback={<div>Loading...</div>}>
          <DogWrapper />
        </Suspense>
      </aside>
    </div>
  )
}
