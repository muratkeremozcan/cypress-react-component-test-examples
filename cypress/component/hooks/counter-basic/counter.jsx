import React, { useState } from 'react'

// example from https://reactjs.org/docs/hooks-state.html
function Counter() {
  // Declare a new state variable, which we'll call "count"
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
