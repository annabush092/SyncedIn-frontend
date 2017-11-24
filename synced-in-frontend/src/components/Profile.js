import React from 'react'

class Profile extends React.Component {
  render() {
    return(
      <div>
        Profile id: {this.props.match.params.id}
      </div>
    )
  }
}

export default Profile
