import React from 'react'

const Toggle = ({ darkMode, setDarkMode }) => (
  <div className="dark-mode-toggle">
    <button type="button" onClick={() => setDarkMode(false)}>
      ☀
    </button>
    <span className="toggle-control">
      <input
        className="dmcheck"
        id="dmcheck"
        type="checkbox"
        checked={darkMode}
        onChange={() => setDarkMode(!darkMode)}
      />
      <label htmlFor="dmcheck" />
    </span>
    <button type="button" onClick={() => setDarkMode(true)}>
      ☾
    </button>
  </div>
)

export default Toggle
