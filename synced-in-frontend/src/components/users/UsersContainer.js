import React from 'react';
import { Route, Redirect, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

import NavBar from '../NavBar.js'
import UserList from './UserList.js'
import Profile from './Profile.js'

class UsersContainer extends React.Component {
  render() {
    return (
      this.props.loggedIn ? (
        <div>
          <NavBar/>
          <div style={{paddingTop: '60px', paddingLeft: '20px'}}>
            <Route
              exact path={this.props.match.url}
              render={()=>(<UserList allUsers={this.props.allUsers}/>)}
            />
            <Route
              path={`${this.props.match.url}/:id`}
              render={() => {
                if(!this.props.loading) {
                  return (<Profile/>)
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
    loggedIn: state.users.loggedIn,
    currentUser: state.users.currentUser
  })
}

export default withRouter(connect(mapStateToProps)(UsersContainer));
