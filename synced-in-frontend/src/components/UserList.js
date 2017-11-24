import React from 'react'

import UserFilter from './UserFilter.js'
import UserCard from './UserCard.js'

class UserList extends React.Component {

  userCards = () => (
    this.props.allUsers.map((user) => (
      < UserCard key={`user-${user.id}`} {...user} />
    ))
  )

  render() {
    return(
      <div>
        <h3>User List</h3>
        <UserFilter/>
        {this.userCards()}
      </div>
    )
  }
}

export default UserList
