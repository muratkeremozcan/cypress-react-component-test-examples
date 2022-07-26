// https://blog.webdevsimplified.com/2022-07/react-router/
import { Route, Routes, Link, useParams } from 'react-router-dom'

const Home = () => (
  <div>
    <h1>Home</h1>
    <p>You are home</p>
  </div>
)

const BookList = () => (
  <div>
    <h1>Book List</h1>
    <p>You are on the book list page</p>
  </div>
)

const Book = () => {
  const { id } = useParams()
  return (
    <div>
      <h1>Book {id}</h1>
      <p>You are on the book page</p>
    </div>
  )
}

const NewBook = () => {
  const { id } = useParams()
  return (
    <div>
      <h1>New Book {id}</h1>
      <p>You are on the new book page</p>
    </div>
  )
}

const NotFound = () => (
  <div>
    <h1>404</h1>
    <p>Not found</p>
  </div>
)

export default function App() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/books">Books</Link>
          </li>
          <li>
            <Link to="/books/1">Book 1</Link>
          </li>
          <li>
            <Link to="/books/new">New Book</Link>
          </li>
          <li>
            <Link to="/not-found">not found</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books">
          <Route index element={<BookList />} />
          <Route path=":id" element={<Book />} />
          <Route path="new" element={<NewBook />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}
