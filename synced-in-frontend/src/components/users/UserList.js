import React from 'react'
import { withRouter } from 'react-router-dom'
import uuid from 'uuid'
import { Card } from 'semantic-ui-react'

import UserFilter from './UserFilter.js'
import UserCard from './UserCard.js'

class UserList extends React.Component {

  state = {
    currentFilter: ""
  }

  handleInput = (ev) => {
    let input = ev.target.value
    this.setState({currentFilter: input})
  }

  testGenres = (skills) => {
    let found = skills.find((skill) => (
      skill.genre.toLowerCase().includes(this.state.currentFilter.toLowerCase())
    ))
    if(found){
      return true
    }else{
      return false
    }
  }

  testInstruments = (inst_skills) => {
    let found = inst_skills.find((inst_skill) => (
      inst_skill.instrument.toLowerCase().includes(this.state.currentFilter.toLowerCase()) || this.testGenres(inst_skill.skills)
    ))
    if(found){
      return true
    }else{
      return false
    }
  }

  filterUsers = (user) => {
    if(user.full_name.toLowerCase().includes(this.state.currentFilter.toLowerCase())) {
      return true
    }else if(this.testInstruments(user.show_skills)){
      return true
    }else{
      return false
    }
  }

  userCards = () => (
    this.props.allUsers.reduce((acc, user) => {
      if(user.id !== this.props.currentUser.id){
        if(this.filterUsers(user)) {
          acc.push(<UserCard key={uuid()} {...user}/>)
        }
      }
      return acc
    }, [])
  )

  render() {
    return(
      <div>
        <UserFilter handleInput={this.handleInput}/>
        <Card.Group style={{paddingTop: '30px'}}>
          {this.userCards()}
        </Card.Group>
      </div>
    )
  }
}

export default withRouter(UserList)
