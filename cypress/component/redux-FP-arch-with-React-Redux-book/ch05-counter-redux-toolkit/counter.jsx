import { connect } from 'react-redux'
import { increment, decrement } from './actions'

function Counter({ counter, decrement, increment }) {
  return (
    <div>
      <div>{counter}</div>
      <button data-cy="-" onClick={decrement}>
        -
      </button>
      <button data-cy="+" onClick={increment}>
        +
      </button>
    </div>
  )
}

function mapStateToProps(counter) {
  return {
    counter
  }
}

export default connect(mapStateToProps, { increment, decrement })(Counter)
