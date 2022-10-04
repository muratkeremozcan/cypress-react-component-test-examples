import { createAction } from 'redux-actions'

const addToast = createAction('ADD_TOAST')
const deleteToast = createAction('DELETE_TOAST')

export { addToast, deleteToast }
