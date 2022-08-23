// https://www.youtube.com/watch?v=pPYwPJNonMc&list=WL&index=9&t=1s

import { useId } from 'react'

export function PersonForm() {
  const id = useId()
  return (
    <div>
      <label htmlFor={`${id}-firstName`}>First Name</label>
      <div>
        <input id={`${id}-firstName`} data-cy={`${id}-firstName`} type="text" />
      </div>
      <label htmlFor={`${id}-lastName`}>Last Name</label>
      <div>
        <input id={`${id}-lastName`} data-cy={`${id}-lastName`} type="text" />
      </div>
    </div>
  )
}
