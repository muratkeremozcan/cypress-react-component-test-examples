import React from 'react'
import { toggleShowMore } from './actions'
import { connect } from 'react-redux'

// generic flow with redux (simple):
// action: the work being done (reducer)
// reducer: how state should change (store)
// mapStateToProps: get state from store and use it as a prop (component)
// connect(mapStateToProps, {action}): link up with state (component)

// event -> ACTION -(dispatch)-(middleware)-> REDUCER -> STORE(state) -(selector)-> update VIEW

function ShowMore({ showMore, toggleShowMore, title, children }) {
  return (
    <div>
      <h2>{title}</h2>
      <div>
        <button data-cy="show-more" onClick={toggleShowMore} type="button">
          ShowMore
        </button>
      </div>
      <div>{showMore ? children : ''}</div>
    </div>
  )
}

const mapStateToProps = ({ showMore }) => ({
  showMore
})

export default connect(mapStateToProps, { toggleShowMore })(ShowMore)
