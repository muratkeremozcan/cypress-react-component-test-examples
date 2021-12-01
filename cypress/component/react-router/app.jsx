import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'

function Home() {
  return (
    <div>
      <h2>Home</h2>
      <p>Sweet Home</p>
    </div>
  )
}

function About() {
  return <h2>About</h2>
}

export const App = () => (
  <div>
    <nav>
      <Link to="/">Home</Link> | <Link to="/about">About</Link>
    </nav>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />
    </Routes>
  </div>
)
