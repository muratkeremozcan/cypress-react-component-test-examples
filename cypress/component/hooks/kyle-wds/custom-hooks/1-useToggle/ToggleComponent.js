import useToggle from './useToggle'

export default function ToggleComponent() {
  const [value, toggleValue] = useToggle(false)

  return (
    <div>
      <div data-cy="value">{value.toString()}</div>
      <button data-cy="toggle" onClick={toggleValue}>
        Toggle
      </button>
      <button data-cy="make-true" onClick={() => toggleValue(true)}>
        Make True
      </button>
      <button data-cy="make-false" onClick={() => toggleValue(false)}>
        Make False
      </button>
    </div>
  )
}
