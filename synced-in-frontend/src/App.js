import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { connect } from 'react-redux'

import LoginForm from './components/LoginForm.js'
import UsersContainer from './components/UsersContainer.js'
import NewUserForm from './components/NewUserForm.js'
import {fetch_users} from './actions/userActions.js'
import {fetch_instruments} from './actions/instrumentActions.js'
import {fetch_genres} from './actions/genreActions.js'
import {fetch_families} from './actions/familyActions.js'

class App extends Component {

  componentDidMount() {
    this.props.get_users()
    this.props.get_instruments()
    this.props.get_families()
    this.props.get_genres()
  }

  render() {
    return (
      <div>
        <Route exact path="/" render={()=>(<h1>syncedIn Home</h1>)}/>
        <Route exact path="/login" render={()=>(<LoginForm/>)}/>
        <Switch>
          <Route exact path="/users/new" render={()=>(<NewUserForm/>)}/>
          <Route path="/users" render={(props)=>(<UsersContainer {...props}/>)}/>
        </Switch>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return ({
    get_users: ( () => { dispatch(fetch_users()) } ),
    get_instruments: ( () => { dispatch(fetch_instruments()) } ),
    get_families: ( () => { dispatch(fetch_families()) } ),
    get_genres: ( () => { dispatch(fetch_genres()) } )
  })
}

export default withRouter(connect(null, mapDispatchToProps)(App));
