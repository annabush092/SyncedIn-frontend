import React from 'react';
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

import NavBar from './NavBar.js'
import UserList from './userContainer/UserList.js'
import Profile from './userContainer/Profile.js'

class UsersContainer extends React.Component {
  render() {
    return (
      this.props.loggedIn ? (
        <div>
          <NavBar/>
          <div>
            <Route
              exact path={this.props.match.url}
              render={()=>(<UserList allUsers={this.props.allUsers} currentUser={this.props.currentUser}/>)}
            />
            <Route
              exact path={`${this.props.match.url}/:id`}
              render={(props) => {
                if(!this.props.loading) {
                  return (<Profile {...props} allUsers={this.props.allUsers}/>)
                }else {
                  return( <p> Loading... </p>)
                }
              }}
            />
          </div>
        </div>
      ) : (
        <Redirect to="/login"/>
      )

    )
  }
}

function mapStateToProps(state) {
  return ({
    allUsers: state.users.list,
    loading: state.users.loading,
    currentUser: state.users.currentUser
  })
}

export default connect(mapStateToProps)(UsersContainer);
