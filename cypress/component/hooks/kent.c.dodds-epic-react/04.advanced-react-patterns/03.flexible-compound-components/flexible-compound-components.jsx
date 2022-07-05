/* eslint-disable react-hooks/rules-of-hooks */
// Flexible Compound Components
// http://localhost:3000/isolated/exercise/03.js

import * as React from 'react'
import { Switch } from '../switch'

// 🐨 create your ToggleContext context here
// 📜 https://reactjs.org/docs/context.html#reactcreatecontext
// (1) create the context
const ToggleContext = React.createContext()
ToggleContext.displayName = 'ToggleContext'

function Toggle({ children }) {
  const [on, setOn] = React.useState(false)
  const toggle = () => setOn(!on)

  // 🐨 remove all this 💣 and instead return <ToggleContext.Provider> where
  // the value is an object that has `on` and `toggle` on it.
  // return React.Children.map(children, child => {
  //   return typeof child.type === 'string'
  //     ? child
  //     : React.cloneElement(child, {on, toggle})
  // })

  return (
    <ToggleContext.Provider value={{ on, toggle }}>
      {children}
    </ToggleContext.Provider>
  )
}

// [3] KEY IDEA: to get the implicit shared state at grandchild level of compound components
// we use createContext api

// 🐨 we'll still get the children from props (as it's passed to us by the
// developers using our component), but we'll get `on` implicitly from
// ToggleContext now
// 🦉 You can create a helper method to retrieve the context here. Thanks to that,
// your context won't be exposed to the user
// 💰 `const context = React.useContext(ToggleContext)`
// 📜 https://reactjs.org/docs/hooks-reference.html#usecontext

// (2) use the context, with a helper method to retrieve the context
const useToggle = () => {
  const context = React.useContext(ToggleContext)

  if (context === undefined) {
    throw new Error('useToggle must be used within a <Toggle />')
  }

  return context
}

// (3) in the children retrieve the value(s) from the helper method
function ToggleOn({ children }) {
  const { on } = useToggle()
  return on ? children : null
}

// 🐨 do the same thing to this that you did to the ToggleOn component
function ToggleOff({ children }) {
  const { on } = useToggle()
  return on ? null : children
}

// 🐨 get `on` and `toggle` from the ToggleContext with `useContext`
function ToggleButton({ ...props }) {
  const { on, toggle } = useToggle()
  return <Switch on={on} onClick={toggle} {...props} />
}

function App() {
  return (
    <div>
      <Toggle>
        <span>Hello .</span>
        <ToggleOn>The button is on</ToggleOn>
        <ToggleOff>The button is off</ToggleOff>
        <div>
          <ToggleButton />
        </div>
      </Toggle>
    </div>
  )
}

export default App

/*
eslint
  no-unused-vars: "off",
*/
