import React from 'react';
import { Redirect } from 'react-router-dom'

class LoginForm extends React.Component {

  state = {
    username: "",
    password: ""
  }

  changeUsername = (ev) => {
    this.setState({username: ev.target.value})
  }

  changePassword = (ev) => {
    this.setState({password: ev.target.value})
  }

  handleSubmit = (ev) => {
    ev.preventDefault()
    this.props.log_in(this.state.username, this.state.password)
    this.setState({
      username: "",
      password: ""
    })
  }

  render() {
    return (
      this.props.loggedIn ? (
        <Redirect to="/"/>
      ) : (
        <div>
          {(this.props.errors.length > 0) ? (
            <h3>{this.props.errors}</h3>
          ) : (
            null
          )}
          <form onSubmit={this.handleSubmit}>
            <input type="text" placeholder="Username" onChange={this.changeUsername} value={this.state.username}/>
            <input type="password" placeholder="Password" onChange={this.changePassword} value={this.state.password}/>
            <input type="submit" value="Log In"/>
          </form>
        </div>
      )
    )
  }
}

export default LoginForm
