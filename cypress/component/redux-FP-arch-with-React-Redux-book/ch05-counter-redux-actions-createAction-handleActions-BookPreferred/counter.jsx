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

// [redux5.1] with redux-actions we save on mapDispatchToProps
export default connect(mapStateToProps, { increment, decrement })(Counter)

// function mapDispatchToProps(dispatch) {
//   return {
//     decrement: () => dispatch({ type: DECREMENT }),
//     onIncrement: () => dispatch({ type: INCREMENT })
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Counter)
