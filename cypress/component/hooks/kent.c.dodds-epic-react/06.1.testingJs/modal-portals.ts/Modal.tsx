import { useEffect, useRef, ReactNode } from 'react'
import { createPortal } from 'react-dom'

let modalRoot = document.getElementById('modal-root') as HTMLElement
if (!modalRoot) {
  modalRoot = document.createElement('div')
  modalRoot.setAttribute('id', 'modal-root')
  document.body.appendChild(modalRoot)
}

interface ModalProps {
  children?: ReactNode
}

const Modal = ({ children }: ModalProps) => {
  const el = useRef(document.createElement('div'))

  useEffect(() => {
    // Use this in case CRA throws an error about react-hooks/exhaustive-deps
    const currentEl = el.current

    modalRoot.appendChild(currentEl)
    return () => void modalRoot!.removeChild(currentEl)
  }, [])

  return createPortal(children, el.current)
}

export default Modal
