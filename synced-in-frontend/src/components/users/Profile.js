import React from 'react'
import {withRouter} from 'react-router-dom'
import { connect } from 'react-redux'
import uuid from 'uuid'
import { Grid, Segment } from 'semantic-ui-react'

import SkillCard from './SkillCard.js'
import UserCard from './UserCard.js'
import { stopRedirectToProfile } from '../../actions/userActions.js'

class Profile extends React.Component {

  componentDidMount() {
    if(this.props.redirecting) {
      this.props.stopRedirect()
    }
  }

  renderSkills = () => (
    this.props.currentProfile.show_skills.map((inst_skill) => (
      <Grid.Column key={uuid()}>
        <SkillCard key={uuid()} instrument={inst_skill.instrument} skills={inst_skill.skills}/>
      </Grid.Column>
    ))
  )

  followingList = () => (
    this.props.currentProfile.users_i_am_following.map((u) => {
      let userFromState = this.props.allUsers.find((stateU)=>(u.id === stateU.id))
      return <UserCard key={uuid()} {...userFromState}/>
    })
  )

  render() {
    if(this.props.currentProfile) {
      return (
        <div key={uuid()} style={{paddingTop: '60px', paddingLeft: '20px'}}>
          <Grid columns='equal'>
            <Grid.Column width={5}>
              <h2>Following: </h2>
              {this.followingList()}
            </Grid.Column>
            <Grid.Column>
              <Segment>
                <h1>{this.props.currentProfile.full_name}</h1>
                <Grid columns={2}>
                  {this.renderSkills()}
                </Grid>
              </Segment>
            </Grid.Column>
          </Grid>
        </div>
      )
    }
    else {
      return (<div> 404: User with id={this.props.match.params.id} does not exist! </div>)
    }
  }
}

function mapStateToProps(state) {
  let fullObj = state.users.list.find((stateU) => (stateU.id === state.users.currentProfile))
  return {
    currentProfile: fullObj,
    allUsers: state.users.list,
    redirecting: state.users.loadProfile
  }
}

function mapDispatchToProps(dispatch) {
  return {
    stopRedirect: () => { dispatch(stopRedirectToProfile()) }
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Profile))
