import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { outerFormStyle, headerStyle, formStyle, inputStyle, textInputStyle, buttonStyle, messageStyle } from '../reusables/form-style.js'
import { outsideLoginPadding } from './login-form-style.js'

import { post_login } from '../../actions/userActions.js'

class LoginForm extends React.Component {

  state = {
    username: "annabush092@gmail.com",
    password: "a"
  }

  changeUsername = (ev) => {
    this.setState({username: ev.target.value})
  }

  changePassword = (ev) => {
    this.setState({password: ev.target.value})
  }

  handleSubmit = (ev) => {
    ev.preventDefault()
    this.props.logIn(this.state.username, this.state.password)
    this.setState({
      username: "",
      password: ""
    })
  }

  render() {
    return (
      <div style={outsideLoginPadding()}>
        {(this.props.errors.length > 0) ? (
          <h3>{this.props.errors}</h3>
        ) : (
          null
        )}
        <div style={outerFormStyle()}>
          <div style={headerStyle()}>
            Login to your account
          </div>
          <form style={formStyle()}>
            <div style={inputStyle()}>
              <label>Username: </label><br />
              <input style={textInputStyle()} type='text' placeholder='Username' onChange={this.changeUsername} value={this.state.username}/>
            </div>
            <div style={inputStyle()}>
              <label>Password: </label><br />
              <input style={textInputStyle()} type="password" placeholder='Password' onChange={this.changePassword} value={this.state.password}/>
            </div>
            <button style={buttonStyle()} type='submit' onClick={this.handleSubmit}>Login</button>
          </form>
          <div style={messageStyle()}>
            Don't have an account?
            <Link to="/users/new">  Sign up here </Link>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return ({
    errors: state.users.errors
  })
}

function mapDispatchToProps(dispatch) {
  return {
    logIn: ((username, password) => { dispatch(post_login(username, password)) }) }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)

// <Grid textAlign='center' style={{height: '100%'}} verticalAlign='middle'>
//   <Grid.Column style={{ maxWidth: 450 }}>
//     <Header as='h2' color='blue' textAlign='center'>
//       Login to your account
//     </Header>
//     <Form size='large'>
//       <Segment stacked>
//         <Form.Input fluid placeholder='Username' onChange={this.changeUsername} value={this.state.username}/>
//         <Form.Input fluid type="password" placeholder='Password' onChange={this.changePassword} value={this.state.password}/>
//         <Button color='blue' fluid size='large' type='submit' onClick={this.handleSubmit}>Login</Button>
//       </Segment>
//     </Form>
//     <Message>
//       Don't have an account?
//       <Link to="/users/new"> Sign up here </Link>
//     </Message>
//   </Grid.Column>
// </Grid>
