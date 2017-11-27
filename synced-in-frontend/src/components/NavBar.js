import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'

import { logout } from '../actions/userActions.js'

class NavBar extends React.Component {

  currentPageStyle = () => (
    {
      background: 'black',
      color: 'white'
    }
  )

  linkStyle = () => (
    {
      background: 'blue',
      color: 'white'
    }
  )

  onLogout = () => {
    this.props.toLogOut()
  }

  render() {
    return(
      <div>
        <NavLink
          to='/users'
          exact
          style={this.linkStyle()}
          activeStyle={this.currentPageStyle()}
        > Find Musicians </NavLink>
        <NavLink
          to={`/users/${this.props.currentUser.id}`}
          exact
          style={this.linkStyle()}
          activeStyle={this.currentPageStyle()}
        > See My Profile </NavLink>
        <button onClick={this.onLogout}>Log out</button>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    currentUser: state.users.currentUser
  }
}

function mapDispatchToProps(dispatch) {
  return {
    toLogOut: () => { dispatch(logout()) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar)
