// https://blog.webdevsimplified.com/2022-07/react-router/
import { Route, Routes, Link, NavLink } from 'react-router-dom'
import Home from './components/Home'
import BookList from './components/BookList'
import Book from './components/Book'
import NewBook from './components/NewBook'
import NotFound from './components/NotFound'
import BookSidebar from './components/BookSidebar'
import BooksLayout from './BooksLayout'

export default function App() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <NavLink
              to="/not-found"
              style={({ isActive }) => ({ color: isActive ? 'red' : 'black' })}
            >
              Not found
            </NavLink>
          </li>
          <li>
            <Link to="/books">Books</Link>
          </li>
        </ul>
      </nav>

      <aside>
        <Routes>
          <Route path="/books" element={<BookSidebar />} />
        </Routes>
      </aside>

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/books" element={<BooksLayout />}>
          <Route index element={<BookList />} />
          <Route path=":id" element={<Book />} />
          <Route path="new" element={<NewBook />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}
