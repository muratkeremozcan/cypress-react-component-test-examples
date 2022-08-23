import {useState} from 'react'
import Modal from './Modal'

const ModalYesNo = () => {
  const [showModal, setShowModal] = useState(false)

  console.log(showModal)
  return (
    <div>
      <div id="modal-root"></div>
      {showModal && (
        <Modal>
          <div
            style={{
              display: 'grid',
              placeItems: 'center',
              height: '100vh',
              width: '100vh',
              background: 'rgba(0,0,0,0.1)',
              zIndex: 99,
            }}
          >
            I'm a modal!{' '}
            <button
              style={{background: 'papyawhip'}}
              onClick={() => setShowModal(false)}
            >
              close
            </button>
          </div>
        </Modal>
      )}
      <button onClick={() => setShowModal(true)}>show Modal</button>
    </div>
  )
}

export default ModalYesNo
