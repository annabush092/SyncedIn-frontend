import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { Button, Form, Grid, Header, Message, Segment } from 'semantic-ui-react'

import { postNewUser } from '../actions/userActions.js'

class NewUserForm extends React.Component {

  state = {
    firstName: "",
    lastName: "",
    username: "",
    password: ""
  }

  changeFirstName = (ev) => {
    this.setState({firstName: ev.target.value})
  }

  changeLastName = (ev) => {
    this.setState({lastName: ev.target.value})
  }

  changeUsername = (ev) => {
    this.setState({username: ev.target.value})
  }

  changePassword = (ev) => {
    this.setState({password: ev.target.value})
  }

  handleSubmit = (ev) => {
    ev.preventDefault()
    this.props.newUser({
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      username: this.state.username,
      password: this.state.password
    })
    this.setState({
      firstName: "",
      lastName: "",
      username: "",
      password: ""
    })
  }

  render() {
    console.log(this.state)
    return (
      <div>
        {(this.props.errors.length > 0) ? (
          <h3>{this.props.errors}</h3>
        ) : (
          null
        )}
        <div className='new-user-form' style={{paddingTop: '100px'}}>
          <Grid textAlign='center' style={{height: '100%'}} verticalAlign='middle'>
            <Grid.Column style={{ maxWidth: 450 }}>
              <Header as='h2' color='blue' textAlign='center'>
                Create a new account
              </Header>
              <Form size='large'>
                <Segment stacked>
                  <Form.Input fluid placeholder='First Name' onChange={this.changeFirstName} value={this.state.firstName}/>
                  <Form.Input fluid placeholder='Last Name' onChange={this.changeLastName} value={this.state.lastName}/>
                  <Form.Input fluid placeholder='Username' onChange={this.changeUsername} value={this.state.username}/>
                  <Form.Input fluid type="password" placeholder='Password' onChange={this.changePassword} value={this.state.password}/>
                  <Button color='blue' fluid size='large' type='submit' onClick={this.handleSubmit}>Sign Up</Button>
                </Segment>
              </Form>
              <Message>
                Already have an account?
                <Link to="/login"> Login here </Link>
              </Message>
            </Grid.Column>
          </Grid>
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
    newUser: ((userObj) => { dispatch(postNewUser(userObj)) }) }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewUserForm)
