import React from 'react'
import {withRouter} from 'react-router-dom'
import { connect } from 'react-redux'
import uuid from 'uuid'
import { Grid, Segment } from 'semantic-ui-react'

import SkillCard from './SkillCard.js'
import UserCard from '../userListContainer/UserCard.js'
import PostCard from '../postsContainer/PostCard.js'
import FollowButton from '../reusables/FollowButton.js'
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

  postList = () => (
    this.props.allPosts.reduce((acc, post)=>{
      if(post.user_id===this.props.currentProfile.id){
        acc.push(<PostCard key={uuid()} {...post} />)
      }
      return acc
    }, [])
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
                <FollowButton userId={this.props.currentProfile.id}/>
                <Grid columns={2}>
                  {this.renderSkills()}
                </Grid>
              </Segment>
              {this.postList()}
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
    allPosts: state.posts,
    redirecting: state.users.loadProfile
  }
}

function mapDispatchToProps(dispatch) {
  return {
    stopRedirect: () => { dispatch(stopRedirectToProfile()) }
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Profile))
