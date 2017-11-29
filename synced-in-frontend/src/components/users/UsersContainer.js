import React from 'react';
import { Redirect, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

import NavBar from '../NavBar.js'
import UserList from './UserList.js'

class UsersContainer extends React.Component {
  render() {
    console.log("hit UsersContainer")
    return (
      !this.props.loading ? (
        <div>
          <NavBar/>
          <div style={{paddingTop: '60px', paddingLeft: '20px'}}>
            <UserList allUsers={this.props.allUsers}/>
          </div>
        </div>
      ) : (
        <h1>Loading...</h1>
      )

    )
  }
}

function mapStateToProps(state) {
  return ({
    allUsers: state.users.list,
    loading: state.users.loading,
    loggedIn: state.users.loggedIn,
    currentUser: state.users.currentUser
  })
}

export default withRouter(connect(mapStateToProps)(UsersContainer));
