import React, { Component } from 'react'
import { ThemeContext } from './useContext'

// really crappy theme usage in a class component vs useContext

export default class ClassContextComponent extends Component {
  themeStyles(dark) {
    return {
      backgroundColor: dark ? '#333' : '#ccc',
      color: dark ? '#ccc' : '#333',
      padding: '2rem',
      margin: '2rem'
    }
  }

  render() {
    console.log('render')

    return (
      <ThemeContext.Consumer>
        {(darkTheme) => {
          return (
            <div data-cy="class" style={this.themeStyles(darkTheme)}>
              Class Theme
            </div>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}
