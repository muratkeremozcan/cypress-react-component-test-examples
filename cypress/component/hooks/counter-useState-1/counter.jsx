import React, { useState } from 'react'

// example from https://reactjs.org/docs/hooks-state.html
function Counter() {
  // useState: a hook we can use to persist state in a functional component
  // think of it this.setState({...})

  // we give state an initial value of 0, we get an array back and destructure
  // the first value count  is the actual value that we can showcase in our render method
  // the second value setCount() is a function that we can invoke and thereby change the value of count
  // setCount(1) would be equivalent to writing this.setState({ count: 1 })
  const [count, setCount] = useState(0)

  return (
    <div>
      <p>You clicked {count} times</p>
      <button id="increment" onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  )
}

export default Counter

// functional vs class component
/*
export class Counter extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
  }

  click = () => {
    this.setState({
      count: this.state.count + 1
    })
  }

  render() {
    return <p onClick={this.click}>count: {this.state.count}</p>
  }
}
*/
