import React from 'react'
import {withRouter} from 'react-router-dom'
import { connect } from 'react-redux'
import uuid from 'uuid'

import { profileContainerStyle, followingListStyle, skillBoxStyle, postsBoxStyle, profileCardPadding, nameHeaderStyle, followingHeader, skillList, profilePicStyle, skillDiv, followDiv, leftColumn, rightColumn } from './profile-style.js'

import SkillCard from './SkillCard.js'
import UserCard from '../userListContainer/UserCard.js'
import NewPostForm from '../postsContainer/NewPostForm.js'
import FollowButton from '../reusables/FollowButton.js'
import { sortPosts } from '../reusables/sortPosts.js'

import { stopRedirectToProfile } from '../../actions/userActions.js'

class Profile extends React.Component {

  componentDidMount() {
    if(this.props.redirecting) {
      this.props.stopRedirect()
    }
  }

  renderSkills = () => (
    this.props.currentProfile.show_skills.map((inst_skill) => (
      <SkillCard key={uuid()} instrument={inst_skill.instrument} skills={inst_skill.skills}/>
    ))
  )

  followingList = () => (
    this.props.currentProfile.users_i_am_following.map((u) => {
      let userFromState = this.props.allUsers.find((stateU)=>(u.id === stateU.id))
      return (
        <div key={uuid()} style={profileCardPadding()}>
          <UserCard {...userFromState}/>
        </div>
      )
    })
  )

  postList = () => {
    let postCards = this.props.allPosts.reduce((acc, post)=>{
      if(post.user_id===this.props.currentProfile.id){
        acc.push(post)
      }
      return acc
    }, [])
    return postCards
  }

  render() {
    if(this.props.currentProfile) {
      return (
        <div key={uuid()} style={profileContainerStyle()}>
          <div style={followingListStyle()}>
            <h2 style={followingHeader()}>Following: </h2>
            {this.followingList()}
          </div>

          <div style={skillBoxStyle()}>
            <div style={leftColumn()}>
              <div style={nameHeaderStyle()}>
                {this.props.currentProfile.full_name}
              </div>
              <div style={skillDiv()}>
                <h2>My Skills: </h2>
                <div style={skillList()}>
                  {this.renderSkills()}
                </div>
              </div>
            </div>
            <div style={rightColumn()}>
              <div style={followDiv()}>
                <FollowButton userId={this.props.currentProfile.id}/>
              </div>
              <div>
                <img src={this.props.currentProfile.picture_url} style={profilePicStyle()}/>
              </div>
            </div>
          </div>

          <div style={postsBoxStyle()}>
            <NewPostForm/>
            {sortPosts(this.postList())}
          </div>
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
