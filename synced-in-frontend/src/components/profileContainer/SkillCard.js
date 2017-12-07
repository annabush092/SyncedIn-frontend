import React from 'react'
import uuid from 'uuid'

import { skillCardStyle, skillHeader, skillContent } from './profile-style.js'

class SkillCard extends React.Component {

  skillGenres = () => (
    this.props.skills.map((genObj) => (
      <div key={uuid()} style={skillContent()}>
          <h3>Genre: {genObj.genre}</h3>
          Qualified to teach: {genObj.teach ? "Yes" : "No"} <br />
          Qualified to perform: {genObj.perform ? "Yes" : "No"}
      </div>
    ))
  )

  render() {
    return (
      <div style={skillCardStyle()}>
        <div style={skillHeader()}>
          {this.props.instrument}
        </div>
        {this.skillGenres()}
      </div>
    )
  }
}

export default SkillCard
