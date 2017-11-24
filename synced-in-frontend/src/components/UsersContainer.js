import React from 'react';
import {Route} from 'react-router-dom'
import { connect } from 'react-redux'

import UserList from './UserList.js'
import Profile from './Profile.js'

class UsersContainer extends React.Component {
  render() {
    return (
      <div>
        <Route path={this.props.match.url} render={()=>(<h1>Users Container</h1>)} />
        <Route exact path={this.props.match.url} render={()=>(<UserList allUsers={this.props.allUsers}/>)}
        />
        <Route exact path={`${this.props.match.url}/:id`} component={Profile}/>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return ({
    allUsers: state.users.list
  })
}

export default connect(mapStateToProps)(UsersContainer);
