import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { Menu, Button } from 'semantic-ui-react'

import { logout } from '../actions/userActions.js'

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
              <NavLink
                to={`/users/${this.props.currentUser.id}`}
                exact
                style={this.linkStyle()}
              > See My Profile </NavLink>
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
    currentUser: state.users.currentUser
  }
}

function mapDispatchToProps(dispatch) {
  return {
    toLogOut: () => { dispatch(logout()) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar)
