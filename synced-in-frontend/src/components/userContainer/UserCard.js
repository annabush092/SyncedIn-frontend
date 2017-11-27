import React from 'react'
import {Redirect} from 'react-router-dom'
import uuid from 'uuid'

class UserCard extends React.Component {

  state = {
    seeProfile: false
  }

  cardStyle = () => ({
    borderStyle: 'solid'
  })

  myInstruments = () => (
    this.props.show_skills.map((inst_skill) => (
      <li key={uuid()}>{inst_skill.instrument}</li>
    ))
  )

  renderProfile = () => {
    this.setState({seeProfile: true})
  }

  render() {
    return(
      this.state.seeProfile ? (
        <Redirect to={`/users/${this.props.id}`} />
      ) : (
        <div style={this.cardStyle()}>
          <h3>{this.props.full_name}</h3>
          <ul>{this.myInstruments()}</ul>
          <button onClick={this.renderProfile}>View Profile</button>
        </div>
      )
    )
  }
}

export default UserCard
