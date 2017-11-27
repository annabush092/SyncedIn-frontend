import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'

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
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    currentUser: state.users.currentUser
  }
}

export default connect(mapStateToProps)(NavBar)
