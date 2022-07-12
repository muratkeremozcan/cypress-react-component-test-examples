import * as React from 'react'
import { Navigate } from 'react-router'
import { savePost } from './api'

export default function Editor({ user }) {
  const [isSaving, setIsSaving] = React.useState(false)
  const [redirect, setRedirect] = React.useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    const { title, content, tags } = e.target.elements

    setIsSaving(true)

    return savePost({
      title: title.value,
      content: content.value,
      tags: tags.value.split(',').map((t) => t.trim()),
      authorId: user.id
    }).then(() => setRedirect(true))
  }

  if (redirect) return <Navigate to="/" />

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title-input">Title</label>
      <input id="title-input" name="title" />

      <label htmlFor="content-input">Content</label>
      <textarea id="content-input" name="content" />

      <label htmlFor="tags-input">Tags</label>
      <input id="tags-input" name="tags" />

      <button type="submit" disabled={isSaving}>
        Submit
      </button>
    </form>
  )
}
