import React from 'react'
import { connect } from 'react-redux'
import { Button } from 'semantic-ui-react'

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
      return (<Button floated='right' onClick={this.onUnfollowUser}>Unfollow</Button>)
    }else {
      return (<Button floated='right' onClick={this.onFollowUser}>Follow</Button>)
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
