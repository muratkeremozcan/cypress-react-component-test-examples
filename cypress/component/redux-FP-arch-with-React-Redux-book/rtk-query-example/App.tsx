import {Routes, Route, BrowserRouter} from 'react-router-dom'
import {Global, css} from '@emotion/react'
import Login from './pages/Login'
import ProductDetails from './pages/ProductDetails'
import ProductsList from './pages/ProductsList'
import NotFound from './pages/NotFound'

export default function App() {
  return (
    <>
      <Global
        styles={css`
          * {
            box-sizing: border-box;
          }

          body {
            background-color: #f3f6f9;
            font-family: 'Nunito Sans', sans-serif;
            height: 100vh;
            margin: 0;
            display: flex;
            justify-content: center;
            align-items: center;
          }
        `}
      />
      <BrowserRouter>
        <Routes>
          <Route path="/products" element={<ProductsList />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
