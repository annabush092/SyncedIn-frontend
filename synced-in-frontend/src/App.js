import React, { Component } from 'react';
import { Route, Redirect, Switch, withRouter } from 'react-router-dom';
import { connect } from 'react-redux'

import LoginForm from './components/LoginForm.js'
import UsersContainer from './components/users/UsersContainer.js'
import NewUserForm from './components/NewUserForm.js'
import {fetch_users, post_login} from './actions/userActions.js'
import {fetch_instruments} from './actions/instrumentActions.js'
import {fetch_genres} from './actions/genreActions.js'
import {fetch_families} from './actions/familyActions.js'
import {fetch_posts} from './actions/postActions.js'
import {fetch_tags} from './actions/tagActions.js'

class App extends Component {

  componentDidMount() {
    this.props.get_users()
    this.props.get_instruments()
    this.props.get_families()
    this.props.get_genres()
    this.props.get_posts()
    this.props.get_tags()
  }

  render() {
    return (
      <div>
        <Route exact path="/" render={()=>(
          <div>
            {this.props.loggedIn ? (
              <Redirect to='/users'/>
            ) : (
              <Redirect to='/login'/>
            )}
          </div>
        )}/>
        <Route exact path="/login" render={()=>(<LoginForm log_in={this.props.log_in} errors={this.props.errors} loggedIn={this.props.loggedIn}/>)}/>
        <Switch>
          <Route exact path="/users/new" component={NewUserForm}/>
          <Route path="/users" component={UsersContainer}/>
        </Switch>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return ({
    loggedIn: state.users.loggedIn,
    errors: state.users.errors,
  })
}

function mapDispatchToProps(dispatch) {
  return ({
    get_users: ( () => {dispatch(fetch_users())} ),
    get_instruments: ( () => {dispatch(fetch_instruments())} ),
    get_families: ( () => {dispatch(fetch_families())} ),
    get_genres: ( () => {dispatch(fetch_genres())} ),
    get_posts: ( () => {dispatch(fetch_posts())} ),
    get_tags: ( () => {dispatch(fetch_tags())} ),
    log_in: ( (username, password) => {dispatch(post_login(username, password))} )
  })
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
