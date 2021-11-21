import React from 'react'

export class Users extends React.Component {
  constructor(props) {
    super(props)
    this.state = { users: [] }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.cypress.io/users?_limit=3')
      .then((response) => response.json())
      .then((data) => this.setState({ users: data }))
  }

  render() {
    return (
      <div>
        {this.state.users.map((user) => (
          <li key={user.id}>
            <strong>{user.id}</strong> - {user.name}
          </li>
        ))}
      </div>
    )
  }
}
