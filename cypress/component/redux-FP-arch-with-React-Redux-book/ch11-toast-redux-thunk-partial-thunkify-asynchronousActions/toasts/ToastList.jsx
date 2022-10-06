import React from 'react'
import { connect } from 'react-redux'
import './ToastList.css'
import ToastItem from './ToastItem'

function ToastList({ toasts, deleteToast }) {
  return (
    <div className="toast">
      {toasts.map((toast) => (
        <ToastItem key={toast.id} toast={toast} />
      ))}
    </div>
  )
}

function mapStateToProps({ toasts }) {
  return {
    toasts
  }
}

export default connect(mapStateToProps)(ToastList)
