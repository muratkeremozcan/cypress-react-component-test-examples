// https://github.com/muratkeremozcan/epic-react/blob/main/02.react-hooks/src/exercise/05.js

import * as React from 'react'
// eslint-disable-next-line no-unused-vars
import VanillaTilt from 'vanilla-tilt'

// [5] useRef:
// DOM nodes are not created until render, so function components do not have access to the Dom
// to get access to the DOM, you need to ask React to give you access to a particular DOM node when it renders your component.
// The way this happens is through a special prop called ref
/*
function MyDiv() {
  const myDivRef = React.useRef() // (1) create the ref
  React.useEffect(() => {
    const myDiv = myDivRef.current  // (3) get the ref's current value
    // myDiv is the div DOM node!
    console.log(myDiv)
  }, [])
  return <div ref={myDivRef}>hi</div> // (2) link to ref to the dom node
}
*/

export default function Tilt({ children }) {
  // (1) create the ref
  const tiltRef = React.useRef()

  React.useEffect(() => {
    // (3) get the ref's current value
    const tiltNode = tiltRef.current

    VanillaTilt.init(tiltNode, {
      max: 25,
      speed: 400,
      glare: true,
      'max-glare': 0.5
    })

    // 💰 Don't forget to return a cleanup function. VanillaTilt.init will add an
    // object to your DOM node to cleanup:
    // 💰 Don't forget to specify your effect's dependencies array! In our case
    // we know that the tilt node will never change, so make it `[]`.
    return () => tiltNode.vanillaTilt.destroy()
  }, [])

  // (2) link to ref to the dom node
  return (
    <div className="tilt-root" ref={tiltRef}>
      <div className="tilt-child">{children}</div>
    </div>
  )
}
