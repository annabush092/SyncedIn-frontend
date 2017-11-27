import React from 'react'
import { Link } from 'react-router-dom'
import {connect} from 'react-redux'
import uuid from 'uuid'

import { followUser, unfollowUser } from '../../actions/userActions.js'

class UserCard extends React.Component {

  cardStyle = () => ({
    borderStyle: 'solid'
  })

  myInstruments = () => (
    this.props.show_skills.map((inst_skill) => (
      <li key={uuid()}>{inst_skill.instrument}</li>
    ))
  )

  onFollowUser = () => {
    this.props.followingUser(this.props.currentUser.id, this.props.id)
  }

  onUnfollowUser = () => {
    this.props.unfollowingUser(this.props.currentUser.id, this.props.id)
  }

  render() {
    return(
      <div style={this.cardStyle()}>

        <Link to={`/users/${this.props.id}`}>{this.props.full_name}</Link>
        <ul>{this.myInstruments()}</ul>

        {this.props.currentUser.following.find(followUser => (followUser.id === this.props.id)) ? (
          <button onClick={this.onUnfollowUser}>Unfollow</button>
        ) : (
          <button onClick={this.onFollowUser}>Follow</button>
        )}

      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    currentUser: state.users.currentUser
  }
}

function mapDispatchToProps(dispatch) {
  return {
    followingUser: (currentUserId, followId) => {dispatch(followUser(currentUserId, followId))},
    unfollowingUser: (currentUserId, followId) => {dispatch(unfollowUser(currentUserId, followId))}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserCard)
