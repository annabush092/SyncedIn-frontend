import React from 'react'
import { connect } from 'react-redux'

import { followButton, followButtonDiv } from '../userListContainer/card-style.js'

import { followUser, unfollowUser } from '../../actions/userActions.js'

class FollowButton extends React.Component {

  onFollowUser = () => {
    this.props.followingUser(this.props.currentUser.id, this.props.userId)
  }

  onUnfollowUser = () => {
    this.props.unfollowingUser(this.props.currentUser.id, this.props.userId)
  }

  renderButton = () => {
    if(this.props.userId === this.props.currentUser.id) {
      return null
    }else if( this.props.currentUser.users_i_am_following.find(followed => (followed.id === this.props.userId)) ){
      return (
        <div style={followButtonDiv()}>
          <button style={followButton()} onClick={this.onUnfollowUser}>
            Unfollow
          </button>
        </div>
      )
    }else {
      return (
        <div style={followButtonDiv()}>
          <button style={followButton()} onClick={this.onFollowUser}>
            Follow
          </button>
        </div>
      )
    }
  }

  render() {
    return(
      this.renderButton()
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

export default connect(mapStateToProps, mapDispatchToProps)(FollowButton)
