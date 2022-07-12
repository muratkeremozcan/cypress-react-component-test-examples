import useCookie from './useCookie'

export default function CookieComponent() {
  const [value, update, remove] = useCookie('name', 'John')

  return (
    <>
      <div>{value}</div>
      <button data-cy="change-sally" onClick={() => update('Sally')}>
        Change Name To Sally
      </button>
      <button data-cy="delete" onClick={remove}>
        Delete Name
      </button>
    </>
  )
}
