import React from 'react'
import { Link } from 'react-router-dom'
import {connect} from 'react-redux'
import uuid from 'uuid'
import { Card, List, Button } from 'semantic-ui-react'

import { followUser, unfollowUser } from '../../actions/userActions.js'

class UserCard extends React.Component {

  myInstruments = () => (
    this.props.show_skills.map((inst_skill) => (
      <List.Item key={uuid()}>
        <List.Content>
          {inst_skill.instrument}
        </List.Content>
      </List.Item>
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
      <Card>
        <Card.Content>
          <Card.Header>
            <Link to={`/users/${this.props.id}`}>{this.props.full_name}</Link>

            {this.props.currentUser.users_i_am_following.find(followed => (followed.id === this.props.id)) ? (
              <Button floated='right' onClick={this.onUnfollowUser}>Unfollow</Button>
            ) : (
              <Button floated='right' onClick={this.onFollowUser}>Follow</Button>
            )}

          </Card.Header>
          <Card.Description>
            <List horizontal>{this.myInstruments()}</List>
          </Card.Description>
        </Card.Content>
      </Card>
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
