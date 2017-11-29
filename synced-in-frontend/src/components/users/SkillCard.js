import React from 'react'
import { withRouter } from 'react-router-dom'
import uuid from 'uuid'
import { List, Card } from 'semantic-ui-react'

class SkillCard extends React.Component {

  skillGenres = () => (
    this.props.skills.map((genObj) => (
      <List.Item key={uuid()}>
        <List.Content>
          <h3>Genre: {genObj.genre}</h3>
          <li>Qualified to teach: {genObj.teach ? "Yes" : "No"} </li>
          <li>Qualified to perform: {genObj.perform ? "Yes" : "No"}</li>
        </List.Content>
      </List.Item>
    ))
  )

  render() {
    return (
      <Card>
        <Card.Content>
          <Card.Header>
            {this.props.instrument}
          </Card.Header>
          <Card.Description>
            <List>
              {this.skillGenres()}
            </List>
          </Card.Description>
        </Card.Content>
      </Card>
    )
  }
}

export default withRouter(SkillCard)
