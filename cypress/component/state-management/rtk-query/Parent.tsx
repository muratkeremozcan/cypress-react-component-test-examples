import { useSelector } from 'react-redux'
import type { AppState } from './store'
import Child from './Child'

export default function Parent() {
  const parentState = useSelector((state: AppState) => state.data.parentState)

  return (
    <div data-cy="Parent">
      <h2>Parent</h2>
      <p>{parentState}</p>
      <Child />
    </div>
  )
}
