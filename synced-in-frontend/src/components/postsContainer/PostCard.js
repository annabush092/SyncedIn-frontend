import React from 'react'
import { withRouter, Redirect } from 'react-router-dom'
import {connect} from 'react-redux'
import uuid from 'uuid'

import { cardHeaderStyle } from '../userListContainer/card-style.js'
import { outsidePostCard, postCardStyle, fullContentStyle, timeStyle, contentStyle, tagListStyle, tagStyle } from './post-card-style.js'


import { changeProfile, redirectToProfile } from '../../actions/userActions.js'

class PostCard extends React.Component {

    onNameClick = () => {
      this.props.changeCurrentProfile(this.props.author.id)
      if(!this.props.location.pathname.includes("/users/") || !Number.isInteger(parseInt(this.props.location.pathname.slice(-1), 10))){
        this.props.redirectingToProfile()
      }
    }

    renderTags = () => (
      this.props.tags.map((tag)=>(
        <div style={tagStyle()} key={uuid()}>
          #{tag.tag_text}
        </div>
      ))
    )

    renderTime = () => {
      const monthArr = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
      let date = new Date(this.props.time_published)
      let month = monthArr[date.getMonth()]
      let minutes = date.getMinutes()
      if(minutes<10){
        minutes = `0${minutes}`
      }
      return `${date.getHours()}:${minutes}, ${month} ${date.getDate()}, ${date.getFullYear()}`
    }

    render() {
      return(
        <div style={outsidePostCard()}>
          <div style={postCardStyle()}>
            <div style={fullContentStyle()}>
              <div style={cardHeaderStyle()} onClick={this.onNameClick}>
                {this.props.author.full_name}
              </div>
              {this.props.loadNewProfile ? (
                <Redirect to={`/users/${this.props.author.id}`}/>
              ) : (null) }
              <div style={timeStyle()}>
              {this.renderTime()}
              </div>
              <div style={contentStyle()}>
              {this.props.content}
              </div>
            </div>
            <div style={tagListStyle()}>
              {this.renderTags()}
            </div>
          </div>
        </div>
      )
    }
  }

  function mapStateToProps(state, ownProps) {
    let userObj = state.users.list.find((stateU)=>(ownProps.user_id === stateU.id))
    return {
      loadNewProfile: state.users.loadProfile,
      author: userObj
    }
  }

  function mapDispatchToProps(dispatch) {
    return {
      changeCurrentProfile: (userId) => { dispatch(changeProfile(userId)) },
      redirectingToProfile: () => { dispatch(redirectToProfile()) }
    }
  }

  export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PostCard))
