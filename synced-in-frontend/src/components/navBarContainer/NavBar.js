import React from 'react'
import { Link, withRouter, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

import { navBarStyle, loginLinkStyle, linkStyle } from '../loggedOutContainer/new-user-form-style.js'

import { logout, changeProfile, redirectToProfile } from '../../actions/userActions.js'

class NavBar extends React.Component {

  onLogout = () => {
    this.props.toLogOut()
  }

  onProfileClick = () => {
    this.props.changeCurrentProfile(this.props.currentUser.id)
    if(!this.props.location.pathname.includes("/users/") || !Number.isInteger(parseInt(this.props.location.pathname.slice(-1), 10))){
      this.props.redirectingToProfile()
    }
  }

  render() {
    return(
      <div style={navBarStyle()}>
        <div style={loginLinkStyle()}>
          <button style={linkStyle()} type='submit' onClick={this.onLogout}>
            Log out
          </button>
        </div>
        <div style={loginLinkStyle()}>
          <button style={linkStyle()} onClick={this.onProfileClick}>
            {this.props.currentUser.full_name}
          </button>
          { this.props.loadNewProfile ? (
            <Redirect to={`/users/${this.props.currentUser.id}`}/>
          ) : (null) }
        </div>
        <div style={loginLinkStyle()}>
          <Link to={`/users/${this.props.currentUser.id}/edit`} style={linkStyle()}>
            Edit Profile
          </Link>
        </div>
        <div style={loginLinkStyle()}>
          <Link to='/users' style={linkStyle()}>
            Find Musicians
          </Link>
        </div>
        <div style={loginLinkStyle()}>
          <Link to='/posts' style={linkStyle()}>
            Home
          </Link>
        </div>

      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    currentUser: state.users.currentUser,
    loadNewProfile: state.users.loadProfile
  }
}

function mapDispatchToProps(dispatch) {
  return {
    toLogOut: () => { dispatch(logout()) },
    changeCurrentProfile: (userId) => { dispatch(changeProfile(userId)) },
    redirectingToProfile: () => { dispatch(redirectToProfile()) }
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NavBar))
