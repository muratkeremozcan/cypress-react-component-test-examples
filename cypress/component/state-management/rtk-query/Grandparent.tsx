import { useSelector } from 'react-redux'
import Parent from './Parent'
import type { AppState } from './store'

export default function Grandparent() {
  const grandparentState = useSelector((state: AppState) => state.data.grandparentState)

  return (
    <div data-cy="Grandparent">
      <h1>Grandparent</h1>
      <p>{grandparentState}</p>
      <Parent />
    </div>
  )
}
