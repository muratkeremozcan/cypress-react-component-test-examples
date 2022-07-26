import { useParams, useOutletContext } from 'react-router-dom'

const Book = () => {
  const { id } = useParams()
  const context = useOutletContext()

  return (
    <div>
      <h1>Book {id}</h1>
      <p>{context.greeting}, you are on the book page </p>
    </div>
  )
}

export default Book
