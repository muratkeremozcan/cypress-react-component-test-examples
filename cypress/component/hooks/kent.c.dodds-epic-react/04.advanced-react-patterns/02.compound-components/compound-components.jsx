// Compound Components
// http://localhost:3000/isolated/exercise/02.js

import * as React from 'react'
import { Switch } from '../switch'

// function Toggle() {
function Toggle({ children }) {
  const [on, setOn] = React.useState(false)
  const toggle = () => setOn(!on)

  // 🐨 replace this with a call to React.Children.map and map each child in
  // props.children to a clone of that child with the props they need using
  // React.cloneElement.
  // 💰 React.Children.map(props.children, child => {/* return child clone here */})
  // 📜 https://reactjs.org/docs/react-api.html#reactchildren
  // 📜 https://reactjs.org/docs/react-api.html#cloneelement
  // return <Switch on={on} onClick={toggle} />

  // problem: how do we take the state values that the toggle is managing (on and toggle)
  // and share it implicitly to the toggle on, toggle off, and toggle button components
  // KEY IDEA: Compound Components Pattern enables you to provide a set of components that implicitly share state
  // otherwise the state shared between the components can be explicit,
  //  meaning that the developer using your component cannot actually see or interact with the state
  // so we create cloned versions of the children components with the props we need to implicitly share state
  return React.Children.map(children, (child) => {
    return typeof child.type === 'string'
      ? child
      : React.cloneElement(child, { on, toggle })
  })
}

// 🐨 Flesh out each of these components

// Accepts `on` and `children` props and returns `children` if `on` is true
const ToggleOn = ({ on, children }) => (on ? children : null)

// Accepts `on` and `children` props and returns `children` if `on` is false
const ToggleOff = ({ on, children }) => (on ? null : children)

// Accepts `on` and `toggle` props and returns the <Switch /> with those props.
const ToggleButton = ({ on, toggle }) => <Switch on={on} onClick={toggle} />

function App() {
  return (
    <div>
      <Toggle>
        <span>Hello. </span>
        <ToggleOn>The button is on</ToggleOn>
        <ToggleOff>The button is off</ToggleOff>
        <ToggleButton />
      </Toggle>
    </div>
  )
}

export default App

/*
eslint
  no-unused-vars: "off",
*/
