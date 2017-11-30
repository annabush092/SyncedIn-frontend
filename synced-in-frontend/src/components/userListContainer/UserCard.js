import React from 'react'
import { withRouter, Redirect } from 'react-router-dom'
import {connect} from 'react-redux'
import uuid from 'uuid'
import { Card, List } from 'semantic-ui-react'

import { changeProfile, redirectToProfile } from '../../actions/userActions.js'
import FollowButton from '../reusables/FollowButton.js'

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
            <FollowButton userId={this.props.id}/>
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
    loadNewProfile: state.users.loadProfile
  }
}

function mapDispatchToProps(dispatch) {
  return {
    changeCurrentProfile: (userId) => { dispatch(changeProfile(userId)) },
    redirectingToProfile: () => { dispatch(redirectToProfile()) }
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserCard))
