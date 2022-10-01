import { createAction } from 'redux-actions'

const setList = createAction('SET_LIST')
const changeSearch = createAction('CHANGE_SEARCH')

export { setList, changeSearch }
