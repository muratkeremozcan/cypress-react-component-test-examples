import React from 'react'
import { partial } from 'lodash'
import thunkify from 'thunkify'
import { connect } from 'react-redux'
import { deleteToast } from './actions'

function ToastItem({ toast, deleteToast }) {
  // const handleClick = () => deleteToast(toast)
  const handleClick = partial(deleteToast, toast)
  // const handleClick = thunkify(deleteToast)(toast)

  return (
    <div data-cy="toast-item" className="toast-item">
      <div>{toast.message}</div>
      <div>
        <button type="button" className="toast-item-delete" onClick={handleClick}>
          X
        </button>
      </div>
    </div>
  )
}

export default connect(null, { deleteToast })(ToastItem)
