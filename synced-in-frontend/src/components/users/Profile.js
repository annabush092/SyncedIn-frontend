import React from 'react'
import {withRouter} from 'react-router-dom'
import uuid from 'uuid'
import { Grid, Segment } from 'semantic-ui-react'

import SkillCard from './SkillCard.js'
import UserCard from './UserCard.js'

class Profile extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      user: this.props.allUsers.find((storeU) => (
        storeU.id === parseInt(this.props.match.params.id, 10)
      ))
    }
  }

  renderSkills = () => (
    this.state.user.show_skills.map((inst_skill) => (
      <Grid.Column key={uuid()}>
        <SkillCard key={uuid()} instrument={inst_skill.instrument} skills={inst_skill.skills}/>
      </Grid.Column>
    ))
  )

  followingList = () => (
    this.state.user.users_i_am_following.map((u) => {
      let userFromState = this.props.allUsers.find((stateU)=>(u.id === stateU.id))
      return <UserCard key={uuid()} {...userFromState}/>
    })
  )

  render() {
    if(this.state.user) {
      return (
        <div key={uuid()}>
          <Grid columns='equal'>
            <Grid.Column width={5}>
              <h2>Following: </h2>
              {this.followingList()}
            </Grid.Column>
            <Grid.Column>
              <Segment>
                <h1>{this.state.user.full_name}</h1>
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

export default withRouter(Profile)
