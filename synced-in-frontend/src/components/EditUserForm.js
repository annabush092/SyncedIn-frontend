import React from 'react';
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { Button, Form, Grid, Header, Segment } from 'semantic-ui-react'

import { editUser, changeProfile, redirectToProfile } from '../actions/userActions.js'

class NewUserForm extends React.Component {

  state = {
    firstName: this.props.currentUser.full_name.split(" ")[0],
    lastName: this.props.currentUser.full_name.split(" ")[1],
    username: this.props.currentUser.username
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
    this.props.editMe({
      id: this.props.currentUser.id,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      username: this.state.username,
    })
    this.props.changeCurrentProfile(this.props.currentUser.id)
    this.props.redirectingToProfile()
  }

  render() {
    console.log(this.state.redirecting)
    return (
      <div>
        {(this.props.errors.length > 0) ? (
          <h3>{this.props.errors}</h3>
        ) : ( null )}
        {(this.props.loadNewProfile) ? (
          <Redirect exact to={`/users/${this.props.currentUser.id}`}/>
        ) : ( null )}
        <div className='new-user-form' style={{paddingTop: '100px'}}>
          <Grid textAlign='center' style={{height: '100%'}} verticalAlign='middle'>
            <Grid.Column style={{ maxWidth: 450 }}>
              <Header as='h2' color='blue' textAlign='center'>
                Edit your account
              </Header>
              <Form size='large'>
                <Segment stacked>
                  <Form.Input fluid placeholder='First Name' onChange={this.changeFirstName} value={this.state.firstName}/>
                  <Form.Input fluid placeholder='Last Name' onChange={this.changeLastName} value={this.state.lastName}/>
                  <Form.Input fluid placeholder='Username' onChange={this.changeUsername} value={this.state.username}/>
                  <Button color='blue' fluid size='large' type='submit' onClick={this.handleSubmit}>Save Changes</Button>
                </Segment>
              </Form>
            </Grid.Column>
          </Grid>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return ({
    errors: state.users.errors,
    currentUser: state.users.currentUser,
    loadNewProfile: state.users.loadProfile
  })
}

function mapDispatchToProps(dispatch) {
  return {
    editMe: (userObj) => { dispatch(editUser(userObj)) },
    changeCurrentProfile: (userId) => { dispatch(changeProfile(userId)) },
    redirectingToProfile: () => { dispatch(redirectToProfile()) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewUserForm)
