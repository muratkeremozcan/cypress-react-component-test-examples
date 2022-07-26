import { useParams, useOutletContext } from 'react-router-dom'

const NewBook = () => {
  const { id } = useParams()
  const context = useOutletContext()

  return (
    <div>
      <h1>New Book {id}</h1>
      <p>{context.greeting}, you are on the new book page</p>
    </div>
  )
}

export default NewBook
