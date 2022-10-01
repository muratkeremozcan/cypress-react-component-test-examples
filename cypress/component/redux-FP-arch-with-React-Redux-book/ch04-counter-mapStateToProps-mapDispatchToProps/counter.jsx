import { connect } from 'react-redux'
import { INCREMENT, DECREMENT } from './reducer'

// the props passed to the component will be provided by the store
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

// mapStateToProps: to allow store to have access to state props
function mapStateToProps(counter) {
  return {
    counter
  }
}

// mapDispatchToProps: to allow store to have access to dispatch props
function mapDispatchToProps(dispatch) {
  return {
    decrement: () => dispatch({ type: DECREMENT }),
    increment: () => dispatch({ type: INCREMENT })
  }
}

// connect the component to the store, with state and dispatch props
export default connect(mapStateToProps, mapDispatchToProps)(Counter)
