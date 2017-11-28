import React from 'react';
import { Redirect, Link } from 'react-router-dom'
import { Button, Form, Grid, Header, Message, Segment } from 'semantic-ui-react'

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
          <div className='login-form' style={{paddingTop: '100px'}}>
            <Grid textAlign='center' style={{height: '100%'}} verticalAlign='middle'>
              <Grid.Column style={{ maxWidth: 450 }}>
                <Header as='h2' color='blue' textAlign='center'>
                  Log-in to your account
                </Header>
                <Form size='large'>
                  <Segment stacked>
                    <Form.Input fluid placeholder='Username' onChange={this.changeUsername} value={this.state.username}/>
                    <Form.Input fluid type="password" placeholder='Password' onChange={this.changePassword} value={this.state.password}/>
                    <Button color='blue' fluid size='large' type='submit' onClick={this.handleSubmit}>Login</Button>
                  </Segment>
                </Form>
                <Message>
                  Don't have an account?
                  <Link to="/users/new"> Sign up here </Link>
                </Message>
              </Grid.Column>
            </Grid>
          </div>
        </div>
      )
    )
  }
}

export default LoginForm


  // <form onSubmit={this.handleSubmit}>
  //   <input type="text" placeholder="Username" onChange={this.changeUsername} value={this.state.username}/>
  //   <input type="password" placeholder="Password" onChange={this.changePassword} value={this.state.password}/>
  //   <input type="submit" value="Log In"/>
  // </form>
