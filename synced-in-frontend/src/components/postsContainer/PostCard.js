import React from 'react'
import { withRouter, Redirect } from 'react-router-dom'
import {connect} from 'react-redux'
import uuid from 'uuid'
import { Card, List } from 'semantic-ui-react'

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
        <List.Item key={uuid()}>
          <List.Content>
            #{tag.tag_text}
          </List.Content>
        </List.Item>
      ))
    )

    renderTime = () => {
      if(this.props.time_published !== "No date provided") {
        let timeArr = this.props.time_published.split("/")
        return `${timeArr[3]}:${timeArr[4]} ${timeArr[1]} ${timeArr[2]}, ${timeArr[0]} EST`
      }else{
        return null
      }
    }

    render() {
      return(
        <Card fluid>
          <Card.Content>
            <Card.Header>
              <h2 onClick={this.onNameClick}>{this.props.author.full_name}</h2>
              {this.props.loadNewProfile ? (
                <Redirect to={`/users/${this.props.author.id}`}/>
              ) : (null) }
              {this.renderTime()}
            </Card.Header>
            <Card.Description>
              {this.props.content}
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <List horizontal>{this.renderTags()}</List>
          </Card.Content>
        </Card>
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
