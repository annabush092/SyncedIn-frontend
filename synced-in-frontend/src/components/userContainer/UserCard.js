import React from 'react'
import {Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import uuid from 'uuid'

import { followUser, unfollowUser } from '../../actions/userActions.js'

class UserCard extends React.Component {

  state = {
    seeProfile: false
  }

  cardStyle = () => ({
    borderStyle: 'solid'
  })

  myInstruments = () => (
    this.props.show_skills.map((inst_skill) => (
      <li key={uuid()}>{inst_skill.instrument}</li>
    ))
  )

  onRenderProfile = () => {
    this.setState({seeProfile: true})
  }

  onFollowUser = () => {
    this.props.followingUser(this.props.currentUser.id, this.props.id)
  }

  onUnfollowUser = () => {
    this.props.unfollowingUser(this.props.currentUser.id, this.props.id)
  }

  render() {
    return(
      this.state.seeProfile ? (
        <Redirect to={`/users/${this.props.id}`} />
      ) : (
        <div style={this.cardStyle()}>
          <h3 onClick={this.onRenderProfile}>{this.props.full_name}</h3>
          <ul>{this.myInstruments()}</ul>
          {this.props.currentUser.following.find(followUser => (followUser.id === this.props.id)) ? (
            <button onClick={this.onUnfollowUser}>Unfollow</button>
          ) : (
            <button onClick={this.onFollowUser}>Follow</button>
          )}
        </div>
      )
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
