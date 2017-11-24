import React from 'react';
import {Route} from 'react-router-dom'
import { connect } from 'react-redux'

import UserList from './UserList.js'
import Profile from './Profile.js'

class UsersContainer extends React.Component {
  render() {
    return (
      <div>
        <Route
          exact path={this.props.match.url}
          render={()=>(<UserList allUsers={this.props.allUsers}/>)}
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
    )
  }
}

function mapStateToProps(state) {
  return ({
    allUsers: state.users.list,
    loading: state.users.loading
  })
}

export default connect(mapStateToProps)(UsersContainer);
