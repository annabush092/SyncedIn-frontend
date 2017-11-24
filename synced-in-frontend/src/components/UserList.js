import React from 'react'

import UserFilter from './UserFilter.js'
import UserCard from './UserCard.js'

class UserList extends React.Component {
  render() {
    return(
      <div>
        <h3>User List</h3>
        <UserFilter/>
        <UserCard/>
      </div>
    )
  }
}

export default UserList
