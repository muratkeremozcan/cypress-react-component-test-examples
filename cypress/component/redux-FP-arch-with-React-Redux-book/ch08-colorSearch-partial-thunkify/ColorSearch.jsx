import React from 'react'
import { connect } from 'react-redux'
import { changeSearch, submitSearch } from './actions'
import thunkify from 'thunkify'
import { partial } from 'lodash'

function ColorSearch({ searchTerm, changeSearch, submitSearch }) {
  // KEY: FP tricks (thunkify, partial, and lodash) to create the event handler
  // const search = () => submitSearch(searchTerm)
  // const search = partial(submitSearch, searchTerm)
  const search = thunkify(submitSearch)(searchTerm)

  return (
    <form>
      <input type="text" value={searchTerm} onChange={(e) => changeSearch(e.target.value)} />
      <button type="button" onClick={search}>
        Search
      </button>
    </form>
  )
}

function mapState({ searchTermInput }) {
  return {
    searchTerm: searchTermInput
  }
}

export default connect(mapState, { changeSearch, submitSearch })(ColorSearch)

/*
Partial application is the process of applying a number of arguments to a function and creating a new function with fewer arguments.

A thunk is a function that delays the invocation of another function. 
The thunk function calls the original function with all the arguments. 
thunkify(f) takes a function f and returns a new function that asks for arguments 
and returns a third function that, when called, invokes f with the all arguments.

*/
