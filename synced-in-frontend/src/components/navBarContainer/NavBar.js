import React from 'react'
import { Link, withRouter, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

import { navBarStyle, logoStyle, navbarDivStyle, navLinkStyle } from './nav-bar-style.js'

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
        <div style={logoStyle()}>
          syncedIn
        </div>
        <div style={navbarDivStyle()}>
          <button style={navLinkStyle()} type='submit' onClick={this.onLogout}>
            Log out
          </button>
        </div>
        <div style={navbarDivStyle()}>
          <button style={navLinkStyle()} onClick={this.onProfileClick}>
            {this.props.currentUser.full_name}
          </button>
          { this.props.loadNewProfile ? (
            <Redirect to={`/users/${this.props.currentUser.id}`}/>
          ) : (null) }
        </div>
        <div style={navbarDivStyle()}>
          <Link to={`/users/${this.props.currentUser.id}/edit`} style={navLinkStyle()}>
            Edit Profile
          </Link>
        </div>
        <div style={navbarDivStyle()}>
          <Link to='/users' style={navLinkStyle()}>
            Find Musicians
          </Link>
        </div>
        <div style={navbarDivStyle()}>
          <Link to='/posts' style={navLinkStyle()}>
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
