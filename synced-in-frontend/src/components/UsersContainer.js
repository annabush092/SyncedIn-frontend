import React from 'react';
import {Route} from 'react-router-dom'

import Profile from './Profile.js'

class UsersContainer extends React.Component {
  render() {
    return (
      <div>
        <Route exact path={this.props.match.url} render={()=>(<h1>Hello from Users Container</h1>)} />
        <Route exact path={this.props.match.url} render={()=>(<h3>Hello from Users List</h3>)} />
        <Route exact path={`${this.props.match.url}/:id`} component={Profile}/>
      </div>
    )
  }
}

export default UsersContainer
