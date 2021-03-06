import React from 'react'

// example stateless component from
// https://hackernoon.com/react-stateless-functional-components-nine-wins-you-might-have-overlooked-997b0d933dbc

const HelloWorld = ({ name }) => {
  const sayHi = () => {
    alert(`Hi ${name}`)
  }

  return (
    <div>
      <a href="#" onClick={sayHi}>
        Say Hi
      </a>
    </div>
  )
}

export default HelloWorld
