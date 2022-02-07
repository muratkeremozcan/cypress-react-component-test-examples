import * as React from 'react'

const LazyDog = React.lazy(() =>
  // @ts-ignore
  import(/* webpackChunkName: "Dog" */ './Dog').then(
    // @ts-ignore
    (comp) => new Promise((resolve) => setTimeout(() => resolve(comp), 500))
  )
)

interface LazyComponentProps {}

export const LazyComponent: React.FC<LazyComponentProps> = () => {
  return (
    <div>
      Loading a dog:
      <React.Suspense fallback={'loading...'}>
        <LazyDog />
      </React.Suspense>
    </div>
  )
}
