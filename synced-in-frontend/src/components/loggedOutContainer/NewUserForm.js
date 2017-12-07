import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { inputStyle, textInputStyle, buttonDiv, buttonStyle } from '../reusables/form-style.js'
import { navBarStyle } from '../navBarContainer/nav-bar-style.js'
import { outsideNewUserPadding, headerStyle, alreadyUserMessage, loginLinkStyle, linkStyle, newUserFormStyle, nameInputStyle } from './new-user-form-style.js'

import { postNewUser } from '../../actions/userActions.js'

import AddInstrumentForm from '../reusables/AddInstrumentForm.js'

class NewUserForm extends React.Component {

  state = {
    firstName: "",
    lastName: "",
    username: "",
    password: "",
    myInstruments: [],
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

  changePassword = (ev) => {
    this.setState({password: ev.target.value})
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
    this.props.newUser({
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      username: this.state.username,
      password: this.state.password,
      instrumentIds: this.state.myInstruments.map(i=>(i.id)),
      newInstrument: this.state.newInstrument,
      newInstrumentFam: this.state.newInstrumentFam
    })
  }

  render() {
    return (
      <div style={outsideNewUserPadding()}>
        <div style={navBarStyle()}>
          <div style={loginLinkStyle()}>
            <Link to="/login" style={linkStyle()}>Login here </Link>
          </div>
          <div style={alreadyUserMessage()}>
            Already have an account?
          </div>
        </div>
        {(this.props.errors.length > 0) ? (
          <h3>{this.props.errors}</h3>
        ) : (
          null
        )}
        <form style={newUserFormStyle()}>
          <div style={headerStyle()}>
            Create a new account
          </div>
          <div style={nameInputStyle()}>
            <label>First name: </label><br />
            <input required style={textInputStyle()} type='text' placeholder='First Name' onChange={this.changeFirstName} value={this.state.firstName}/>
          </div>
          <div style={nameInputStyle()}>
            <label>Last name: </label><br />
            <input required style={textInputStyle()} type='text' placeholder='Last Name' onChange={this.changeLastName} value={this.state.lastName}/>
          </div>
          <div style={inputStyle()}>
            <label>Username: </label><br />
            <input required style={textInputStyle()} type='text' placeholder='Username' onChange={this.changeUsername} value={this.state.username}/>
          </div>
          <div style={inputStyle()}>
            <label>Password: </label><br />
            <input required style={textInputStyle()} type="password" placeholder='Password' onChange={this.changePassword} value={this.state.password}/>
          </div>

          <AddInstrumentForm myInstruments={this.state.myInstruments} changeMyInstruments={this.changeMyInstruments} onNewInstrument={this.onNewInstrument} newInstrument={this.state.newInstrument} onNewInstrumentFam={this.onNewInstrumentFam} newInstrumentFam={this.state.newInstrumentFam}/>

          <div style={buttonDiv()}>
            <button style={buttonStyle()} type='submit' onClick={this.handleSubmit}>Sign Up</button>
          </div>

        </form>
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
