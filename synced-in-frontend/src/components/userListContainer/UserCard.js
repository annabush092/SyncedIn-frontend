import React from 'react'
import { withRouter, Redirect } from 'react-router-dom'
import {connect} from 'react-redux'
import uuid from 'uuid'

import { cardStyle, cardHeaderStyle, cardListStyle, instrumentListStyle, pictureStyle } from './card-style.js'

import { changeProfile, redirectToProfile } from '../../actions/userActions.js'
import FollowButton from '../reusables/FollowButton.js'

class UserCard extends React.Component {

  myInstruments = () => (
    this.props.show_skills.map((inst_skill) => (
      <div style={instrumentListStyle()} key={uuid()}>
        {inst_skill.instrument}
      </div>
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
      <div style={cardStyle()}>
        <img style={pictureStyle()} src={this.props.picture_url}/>
        <div style={cardHeaderStyle()} onClick={this.onNameClick}>
          {this.props.full_name}
          {this.props.loadNewProfile ? (
            <Redirect to={`/users/${this.props.id}`}/>
          ) : (null) }
        </div>
        <FollowButton userId={this.props.id}/>
        <div style={cardListStyle()}>
          {this.myInstruments()}
        </div>
      </div>
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
