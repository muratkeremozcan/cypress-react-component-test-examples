import React from 'react'

const Content = ({ checked, onChange }) => (
  <div className="content">
    <h1>What Are Hooks, Exactly?</h1>
    <p>
      To understand Hooks, we need to take a step back and think about code
      reuse.
    </p>
    <p>
      Today, there are a lot of ways to reuse logic in React apps. We can write
      simple functions and call them to calculate something. We can also write
      components (which themselves could be functions or classes). Components
      are more powerful, but they have to render some UI. This makes them
      inconvenient for sharing non-visual logic. This is how we end up with
      complex patterns like render props and higher-order components. Wouldn’t
      React be simpler if there was just one common way to reuse code instead of
      so many?
    </p>
    <p>
      Functions seem to be a perfect mechanism for code reuse. Moving logic
      between functions takes the least amount of effort. However, functions
      can’t have local React state inside them. You can’t extract behavior like
      “watch window size and update the state” or “animate a value over time”
      from a class component without restructuring your code or introducing an
      abstraction like Observables. Both approaches hurt the simplicity that we
      like about React.
    </p>
    <p>
      Hooks solve exactly that problem. Hooks let you use React features (like
      state) from a function — by doing a single function call. React provides a
      few built-in Hooks exposing the “building blocks” of React: state,
      lifecycle, and context.
    </p>
    <p>
      Since Hooks are regular JavaScript functions, you can combine built-in
      Hooks provided by React into your own “custom Hooks”. This lets you turn
      complex problems into one-liners and share them across your application or
      with the React community.
    </p>
  </div>
)

export default Content
