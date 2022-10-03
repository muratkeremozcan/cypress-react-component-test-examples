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

function mapStateToProps(state) {
  return {
    list: filterList(state)
  }
}

export default connect(mapStateToProps)(ColorList)
