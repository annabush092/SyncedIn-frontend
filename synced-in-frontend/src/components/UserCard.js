import React from 'react'

class UserCard extends React.Component {

  cardStyle = () => ({
    borderStyle: 'solid'
  })

  myInstruments = () => (
    this.props.show_skills.map((inst_skill) => (
      <li>{inst_skill.instrument}</li>
    ))
  )

  render() {
    return(
      <div style={this.cardStyle()}>
        <h3>{this.props.full_name}</h3>
        <ul>{this.myInstruments()}</ul>
      </div>
    )
  }
}

export default UserCard
