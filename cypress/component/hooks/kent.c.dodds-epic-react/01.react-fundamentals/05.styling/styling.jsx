// example from https://github.com/muratkeremozcan/epic-react/blob/main/01.react-fundamentals/src/exercise/05.js
// Styling
// http://localhost:3000/isolated/exercise/05.js

import * as React from 'react'
import './box-styles.css'

// [5] TL,DR;
// For CSS, either use class name or style prop
// style prop takes an object with camelCased property names
// <div className="box" style={{marginTop: 20, backgroundColor: 'blue'}} />
// we can use JSX with template literals
// we can pass any props to a component with plain props {...props}
// as long as we define a className and style attributes in the render of the component
// we can customize those attributes with the props of the component

// a component with plain props
const Box0 = (props) => <div {...props} />

const Box = ({ className = '', styles, size, ...otherProps }) => {
  const sizeClassName = size ? `box--${size}` : ''
  return (
    <div
      className={`box ${className} ${sizeClassName}`} // JSX with template literal
      style={{ fontSize: 'italic', ...styles }}
      {...otherProps}
    />
  )
}

function App() {
  return (
    <div>
      <Box0
        data-cy="prototype"
        className="box box--small"
        style={{ backgroundColor: 'lightblue' }}
      >
        prototype
      </Box0>
      <Box
        data-cy="small lightblue box"
        size="small"
        style={{ backgroundColor: 'lightblue' }}
      >
        small lightblue box
      </Box>
      <Box
        data-cy="medium pink box"
        size="medium"
        style={{ backgroundColor: 'pink' }}
      >
        medium pink box
      </Box>
      <Box
        data-cy="large orange box"
        size="large"
        style={{ backgroundColor: 'orange' }}
      >
        large orange box
      </Box>
      <Box data-cy="sizeless box">sizeless box</Box>
    </div>
  )
}

export default App
