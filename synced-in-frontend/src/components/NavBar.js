import React from 'react'
import { NavLink, withRouter, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { Menu, Button } from 'semantic-ui-react'

import { logout, changeProfile, redirectToProfile } from '../actions/userActions.js'

class NavBar extends React.Component {

  linkStyle = () => (
    {
      background: 'black',
      color: 'white'
    }
  )

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
      <div>
        <Menu fixed='top' inverted>
          <Menu.Menu position='right'>
            <Menu.Item>
              <NavLink
                to='/users'
                exact
                style={this.linkStyle()}
              > Find Musicians </NavLink>
            </Menu.Item>
            <Menu.Item>
              <Button onClick={this.onProfileClick}>See my Profile </Button>
              { this.props.loadNewProfile ? (
                <Redirect to={`/users/${this.props.currentUser.id}`}/>
              ) : (null) }
            </Menu.Item>
            <Menu.Item>
              <Button onClick={this.onLogout}>Log out</Button>
            </Menu.Item>
          </Menu.Menu>
        </Menu>
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
