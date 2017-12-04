import React from 'react';
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { Button, Form, Grid, Header, Segment } from 'semantic-ui-react'

import { editUser, changeProfile, redirectToProfile } from '../actions/userActions.js'

import AddInstrumentForm from './reusables/AddInstrumentForm.js'

class NewUserForm extends React.Component {

  state = {
    firstName: this.props.currentUser.full_name.split(" ")[0],
    lastName: this.props.currentUser.full_name.split(" ")[1],
    username: this.props.currentUser.username,
    myInstruments: this.props.currentUserInstruments
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

  changeMyInstruments = (instList) => {
    this.setState({ myInstruments: instList})
  }

  handleSubmit = (ev) => {
    ev.preventDefault()
    this.props.editMe({
      id: this.props.currentUser.id,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      username: this.state.username,
      instrumentIds: this.state.myInstruments.map(i=>(i.id))
    })
    this.props.changeCurrentProfile(this.props.currentUser.id)
    this.props.redirectingToProfile()
  }

  render() {
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

                  <AddInstrumentForm myInstruments={this.state.myInstruments} changeMyInstruments={this.changeMyInstruments}/>

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
  let instNames = state.users.currentUser.show_skills.map((sk)=> (
    sk.instrument
  ))
  let instList = state.instruments.filter((i)=>(
    instNames.includes(i.name)
  ))

  return ({
    errors: state.users.errors,
    currentUser: state.users.currentUser,
    loadNewProfile: state.users.loadProfile,
    currentUserInstruments: instList
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
