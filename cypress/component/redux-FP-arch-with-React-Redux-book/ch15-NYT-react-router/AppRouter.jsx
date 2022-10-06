import {} from 'react-router-dom'
import Home from './Home'
import BookCategories from './books/Categories'
import Books from './books/Books'
import Articles from './articles/Articles'
import MovieReviews from './movieReviews/MovieReviews'
import { Routes, Route } from 'react-router-dom'

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/books" element={<BookCategories />} />
      <Route path="/books/:category/" element={<Books />} />
      <Route path="/articles" element={<Articles />} />
      <Route path="/moviereviews" element={<MovieReviews />} />
      <Route path="*" element={<Home />} />
    </Routes>
  )
}

export default AppRouter
