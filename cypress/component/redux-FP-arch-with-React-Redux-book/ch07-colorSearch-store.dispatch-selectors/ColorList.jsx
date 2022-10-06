import React from 'react'
import { connect } from 'react-redux'
import { filterList } from './selectors'

function ColorItem({ color }) {
  return (
    <div data-cy={`color-${color.name.toLowerCase()}`}>
      <div>{color.name}</div>
      <div>{color.hexString}</div>
    </div>
  )
}

function ColorList({ list }) {
  return (
    <div>
      {list.map((color) => (
        <ColorItem color={color} key={color.colorId} />
      ))}
    </div>
  )
}

// event -> ACTION -(dispatch)-(middleware)-> REDUCER -> STORE(state) -(selector)-> update VIEW
// [redux7] selectors get state data from the Redux store, derive the data, and pass it as props to the React container components
// selectors take a state as input and produce a slice of the state as output.
// selectors are created in the related reducer file, or their own
// they are consumed at the container components mapStateToProps function while getting the data from the store

function mapStateToProps(state) {
  return {
    list: filterList(state)
  }
}

export default connect(mapStateToProps)(ColorList)
