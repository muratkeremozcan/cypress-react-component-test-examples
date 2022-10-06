import React from 'react'
import { connect } from 'react-redux'
import { changeSearch } from './actions'

function ColorSearch({ searchTerm, changeSearch }) {
  return (
    <form>
      <input type="text" value={searchTerm} onChange={(e) => changeSearch(e.target.value)} />
    </form>
  )
}

function mapStateToProps({ searchTerm }) {
  return {
    searchTerm
  }
}

export default connect(mapStateToProps, { changeSearch })(ColorSearch)
