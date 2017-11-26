import React from 'react'
import uuid from 'uuid'

class Profile extends React.Component {

  constructor(props) {
    super(props)
    this.user = this.props.allUsers.find((user) => (
      user.id === parseInt(this.props.match.params.id, 10)
    ))
  }

  renderSkills = () => (
    this.user.show_skills.map((inst_skill) => (
      <div key={uuid()}>
        <h2>{inst_skill.instrument}</h2>
        <ul>
          {this.skillGenres(inst_skill.skills)}
        </ul>
      </div>
    ))
  )

  skillGenres = (genreArr) => (
    genreArr.map((genObj) => (
      <li key={uuid()}>
        <ul>
          <h3>Genre: {genObj.genre}</h3>
          <li>Qualified to teach: {genObj.teach ? "Yes" : "No"} </li>
          <li>Qualified to perform: {genObj.perform ? "Yes" : "No"}</li>
        </ul>
      </li>
    ))
  )

  renderContacts = () => (
    <div key={uuid()}>
      <h2>Contacts: </h2>
      <ul>{this.contactsList()}</ul>
    </div>
  )

  contactsList = () => (
    this.user.contacts.map((cont) => (
      <li key={uuid()}>{cont.first_name} {cont.last_name}</li>
    ))
  )

  render() {
    if(this.user) {
      return (
        <div key={uuid()}>
          <h1>{this.user.full_name}</h1>
          {this.renderSkills()}
          {this.renderContacts()}
        </div>
      )
    }
    else {
      return (<div> 404: User with id={this.props.match.params.id} does not exist! </div>)
    }
  }
}

export default Profile
