import {useState, useContext} from 'react'
import {SimpleContext} from './simple-context'

type SimpleComponentProps = {
  id?: string
}

export const SimpleComponent = (props: SimpleComponentProps) => {
  const [id] = useState<string>(props.id || 'unknown id')
  const context = useContext(SimpleContext)

  console.log('context %o', context)

  return (
    <>
      <div>{context.name || 'context not set'}</div>
      <div className="id">{id}</div>
    </>
  )
}
