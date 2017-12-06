import React from 'react';
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

import { inputStyle, textInputStyle, buttonDiv, buttonStyle } from './reusables/form-style.js'
import { outsideNewUserPadding, headerStyle, newUserFormStyle, nameInputStyle } from './loggedOutContainer/new-user-form-style.js'

import { editUser, changeProfile, redirectToProfile } from '../actions/userActions.js'

import AddInstrumentForm from './reusables/AddInstrumentForm.js'

class NewUserForm extends React.Component {

  state = {
    firstName: this.props.currentUser.full_name.split(" ")[0],
    lastName: this.props.currentUser.full_name.split(" ")[1],
    username: this.props.currentUser.username,
    myInstruments: this.props.currentUserInstruments,
    newInstrument: "",
    newInstrumentFam: "10"
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

  onNewInstrument = (ev) => {
    this.setState({newInstrument: ev.target.value})
  }

  onNewInstrumentFam = (ev) => {
    this.setState({newInstrumentFam: ev.target.value})
  }

  handleSubmit = (ev) => {
    ev.preventDefault()
    this.props.editMe({
      id: this.props.currentUser.id,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      username: this.state.username,
      instrumentIds: this.state.myInstruments.map(i=>(i.id)),
      newInstrument: this.state.newInstrument,
      newInstrumentFam: this.state.newInstrumentFam
    })
    this.props.changeCurrentProfile(this.props.currentUser.id)
    this.props.redirectingToProfile()
  }

  render() {
    return (
      <div style={outsideNewUserPadding()}>
        {(this.props.errors.length > 0) ? (
          <h3>{this.props.errors}</h3>
        ) : ( null )}

        {(this.props.loadNewProfile) ? (
          <Redirect exact to={`/users/${this.props.currentUser.id}`}/>
        ) : ( null )}

        <form style={newUserFormStyle()}>
          <div style={headerStyle()}>
            Edit your account
          </div>
          <div style={nameInputStyle()}>
            <label>First name: </label><br />
            <input style={textInputStyle()} type='text' placeholder='First Name' onChange={this.changeFirstName} value={this.state.firstName}/>
          </div>
          <div style={nameInputStyle()}>
            <label>Last name: </label><br />
            <input style={textInputStyle()} type='text' placeholder='Last Name' onChange={this.changeLastName} value={this.state.lastName}/>
          </div>
          <div style={inputStyle()}>
            <label>Username: </label><br />
            <input style={textInputStyle()} type='text' placeholder='Username' onChange={this.changeUsername} value={this.state.username}/>
          </div>
          <AddInstrumentForm myInstruments={this.state.myInstruments} changeMyInstruments={this.changeMyInstruments} onNewInstrument={this.onNewInstrument} newInstrument={this.state.newInstrument} onNewInstrumentFam={this.onNewInstrumentFam} newInstrumentFam={this.state.newInstrumentFam}/>
          <div style={buttonDiv()}>
          <button style={buttonStyle()} type='submit' onClick={this.handleSubmit}>
            Save Changes
          </button>
          </div>
        </form>
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
