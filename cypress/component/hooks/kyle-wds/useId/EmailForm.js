import { useId } from 'react'
export default function EmailForm() {
  // Problem: we want unique ids but we cannot have random ones
  // so we use useId
  const id = useId()
  return (
    <>
      <label htmlFor={`${id}-name`}>Name</label>
      <input type="text" id={`${id}-name`} data-cy={`${id}-name`} />
      <br />
      <label htmlFor={`${id}-email`}>Email</label>
      <input type="email" id={`${id}-email`} data-cy={`${id}-email`} />
    </>
  )
}
