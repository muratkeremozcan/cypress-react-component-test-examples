import { useState } from 'react'
import useLockBodyScroll from './use-lock-body-scroll'
import './styles.css'

export default function App() {
  // State for our modal
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <div>
      <div className="bar">
        <button onClick={() => setModalOpen(true)}>Show Modal</button>
      </div>

      <Content data-cy="content" />

      {modalOpen && (
        <Modal
          title="Try scrolling"
          content="I bet you you can't! Muahahaha 😈"
          onClose={() => setModalOpen(false)}
        />
      )}
    </div>
  )
}

function Modal({ title, content, onClose }) {
  // Call hook to lock body scroll
  useLockBodyScroll()

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal">
        <h2>{title}</h2>
        <p>{content}</p>
      </div>
    </div>
  )
}

const Content = () => {
  const terms = [
    'stars',
    'birds',
    'puppy',
    'nature',
    'snow',
    'cafe',
    'hipster',
    'startup',
    'salad',
    'funny'
  ]

  const images = terms.map((term) => (
    <img
      data-cy="image"
      src={`https://source.unsplash.com/random/800x200?${term}`}
      alt=""
    />
  ))

  return <div className="images">{images}</div>
}
