// Prop Collections and Getters
// http://localhost:3000/isolated/exercise/04.js

import * as React from 'react'
import { Switch } from '../switch'

// [4] Prop Collections and Getters pattern allows our custom hooks to supply conveniences
// for common use cases and require less customization for things like accessibility

function useToggle() {
  const [on, setOn] = React.useState(false)
  const toggle = () => setOn(!on)

  // challenge: our custom hook will need to wire aria-pressed toggle onClick,
  // how can we make that easier for the consumer of the hook?

  // (2)
  // instead of having an object of props, we call a function to get the props.
  // Then we can pass that function the props we want applied and that function
  // will be responsible for composing the props together.
  // This allows our consumers to have their own logic, and whatever else they want to put in here
  // while getting the enhanced capabilities from the props from our prop getter
  const callAll =
    (...fns) =>
    (...args) =>
      fns.forEach((fn) => fn?.(...args) /* fn && fn(...args) */)

  function getTogglerProps({ onClick, ...props } = {}) {
    return {
      'aria-pressed': on,
      onClick: callAll(onClick, toggle),
      ...props
    }
  }

  return {
    on,
    toggle,
    getTogglerProps
  }
}
// (1)
// function App() {
//   const {on, togglerProps} = useToggle()
//   return (
//     <div>
//       <Switch on={on} {...togglerProps} />
//       <hr />
//       <button
//         aria-label="custom-button"
//         {...togglerProps}
//         onClick={() => console.info('onButtonClick')}
//       >
//         {on ? 'on' : 'off'}
//       </button>
//     </div>
//   )
// }

// (2)
function App() {
  const { on, getTogglerProps } = useToggle()
  return (
    <div>
      <Switch {...getTogglerProps({ on })} />
      <hr />
      <button
        {...getTogglerProps({
          'aria-label': 'custom-button',
          onClick: () => console.info('onButtonClick'),
          id: 'custom-button-id'
        })}
      >
        {on ? 'on' : 'off'}
      </button>
    </div>
  )
}

export default App

/*
eslint
  no-unused-vars: "off",
*/
