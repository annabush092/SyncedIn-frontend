import React from 'react';
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

import UserList from './UserList.js'

class UsersContainer extends React.Component {
  render() {
    return (
      <div style={{paddingTop: '60px', paddingLeft: '20px'}}>
        <UserList allUsers={this.props.allUsers}/>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return ({
    allUsers: state.users.list
  })
}

export default withRouter(connect(mapStateToProps)(UsersContainer));
