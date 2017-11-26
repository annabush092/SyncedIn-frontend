import React from 'react'
import { NavLink } from 'react-router-dom'

export default class NavBar extends React.Component {

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
      </div>
    )
  }
}
