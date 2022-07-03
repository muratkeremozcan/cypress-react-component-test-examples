import React, { useImperativeHandle, useRef } from 'react'

//  (3) the sub component should take props and a ref={subComponentRef}
function ConfirmationModal({ isOpen, onClose }, ref) {
  // (4) setup useRef() for the focus points
  const closeRef = useRef()
  const confirmRef = useRef()
  const denyRef = useRef()

  // (5) useImperativeHandle(ref, () => { return { focusFunctionA, focusFunctionB }})
  useImperativeHandle(ref, () => {
    return {
      focusCloseBtn: () => closeRef.current.focus(),
      focusConfirmBtn: () => confirmRef.current.focus(),
      focusDenyBtn: () => denyRef.current.focus()
    }
  })

  if (!isOpen) return null

  return (
    // (6) the subComponent takes the main ref
    // the focus points take the useRefs
    <div ref={ref}>
      <button className="close-btn" onClick={onClose} ref={closeRef}>
        &times;
      </button>
      <div className="modal-header">
        <h1>Title</h1>
      </div>
      <div className="modal-body">Do you confirm?</div>
      <div className="modal-footer">
        <button className="confirm-btn" onClick={onClose} ref={confirmRef}>
          Yes
        </button>
        <button className="deny-btn" onClick={onClose} ref={denyRef}>
          No
        </button>
      </div>
    </div>
  )
}

// (7) wrap the subComponent in React.forwardRef()
export default React.forwardRef(ConfirmationModal)
