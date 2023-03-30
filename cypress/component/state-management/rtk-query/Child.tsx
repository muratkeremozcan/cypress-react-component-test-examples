import { useDispatch, useSelector } from 'react-redux'
import { setChildState, setGrandparentState, setParentState } from './store'
import type { AppState } from './store'

export default function Child() {
  const childState = useSelector((state: AppState) => state.data.childState)
  const dispatch = useDispatch()

  const handleClick = () => {
    const newState = 'Hello from Child, updated!'
    dispatch(setChildState(newState))
    dispatch(setParentState(newState))
    dispatch(setGrandparentState(newState))
  }

  return (
    <div data-cy="Child">
      <h3>Child</h3>
      <p>{childState}</p>
      <button data-cy="update-state" onClick={handleClick}>
        Update State
      </button>
    </div>
  )
}
