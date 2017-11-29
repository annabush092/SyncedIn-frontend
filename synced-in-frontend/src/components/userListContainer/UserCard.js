import React from 'react'
import { withRouter, Redirect } from 'react-router-dom'
import {connect} from 'react-redux'
import uuid from 'uuid'
import { Card, List, Button } from 'semantic-ui-react'

import { followUser, unfollowUser, changeProfile, redirectToProfile } from '../../actions/userActions.js'

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

  renderButton = () => {
    if(this.props.id === this.props.currentUser.id) {
      return null
    }else if( this.props.currentUser.users_i_am_following.find(followed => (followed.id === this.props.id)) ){
      return (<Button floated='right' onClick={this.onUnfollowUser}>Unfollow</Button>)
    }else {
      return (<Button floated='right' onClick={this.onFollowUser}>Follow</Button>)
    }
  }

  onNameClick = () => {
    this.props.changeCurrentProfile(this.props.id)
    if(!this.props.location.pathname.includes("/users/") || !Number.isInteger(parseInt(this.props.location.pathname.slice(-1), 10))){
      this.props.redirectingToProfile()
    }
  }

  render() {
    return(
      <Card>
        <Card.Content>
          <Card.Header>
            <h2 onClick={this.onNameClick}>{this.props.full_name}</h2>
            {this.props.loadNewProfile ? (
              <Redirect to={`/users/${this.props.id}`}/>
            ) : (null) }
            {this.renderButton()}
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
    currentUser: state.users.currentUser,
    loadNewProfile: state.users.loadProfile
  }
}

function mapDispatchToProps(dispatch) {
  return {
    followingUser: (currentUserId, followId) => {dispatch(followUser(currentUserId, followId))},
    unfollowingUser: (currentUserId, followId) => {dispatch(unfollowUser(currentUserId, followId))},
    changeCurrentProfile: (userId) => { dispatch(changeProfile(userId)) },
    redirectingToProfile: () => { dispatch(redirectToProfile()) }
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserCard))
