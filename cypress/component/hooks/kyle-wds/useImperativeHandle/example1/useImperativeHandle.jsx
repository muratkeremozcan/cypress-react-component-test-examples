import { useState, useRef } from 'react'
import ConfirmationModal from './ConfirmationModal'

// problem: Focus buttons are in the main component,
// what we want to focus on is in the Modal

export default function App() {
  const [open, setOpen] = useState(false)
  // (1) make a reference to the sub component
  const modalRef = useRef()
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  // (2) set up the focus function through the sub component ref
  const focusClose = () => modalRef.current.focusCloseBtn()
  const focusConfirm = () => modalRef.current.focusConfirmBtn()
  const focusDeny = () => modalRef.current.focusDenyBtn()

  return (
    <>
      <button data-cy="open" onClick={handleOpen}>
        Open
      </button>
      <button data-cy="focus-close" onClick={focusClose}>
        Focus Close
      </button>
      <button data-cy="focus-confirm" onClick={focusConfirm}>
        Focus Confirm
      </button>
      <button data-cy="focus-deny" onClick={focusDeny}>
        Focus Deny
      </button>
      {/* (3) the sub component should take props and a ref={subComponentRef} */}
      <ConfirmationModal ref={modalRef} isOpen={open} onClose={handleClose} />
    </>
  )
}
