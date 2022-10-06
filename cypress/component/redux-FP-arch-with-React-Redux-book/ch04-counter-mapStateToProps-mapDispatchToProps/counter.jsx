import { connect } from 'react-redux'
import { INCREMENT, DECREMENT } from './reducer'

// [redux4.1] generic flow with redux (simple):
// action: the work being done (reducer)
// reducer: how state should change (store)
// mapStateToProps: get state from store and use it as a prop (component)
// connect(mapStateToProps, {action}): link up with state (component)
// event -> ACTION -(dispatch)-(middleware)-> REDUCER -> STORE(state) -(selector)-> update VIEW

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

// [redux4.2] mapStateToProps: to allow store to have access to state props
function mapStateToProps(counter) {
  return {
    counter
  }
}

// [redux4.3] mapDispatchToProps: to allow store to have access to dispatch props
function mapDispatchToProps(dispatch) {
  return {
    decrement: () => dispatch({ type: DECREMENT }),
    increment: () => dispatch({ type: INCREMENT })
  }
}

// [redux4.4] connect is function used as a bridge between React components and data from the Redux store
// connect accepts a second argument, a function conventionally named mapDispatchToProps.
// connect will pass dispatch as an argument to the mapDispatchToProps function, and allow components to shorten action calls
export default connect(mapStateToProps, mapDispatchToProps)(Counter)
