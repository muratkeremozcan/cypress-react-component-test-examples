import React from 'react'
import { Link } from 'react-router-dom'

export default function CategoryItem({ category }) {
  return (
    <div>
      <Link to={`/books/${category.id}/`}>{category.name}</Link>
    </div>
  )
}
