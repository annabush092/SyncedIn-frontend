import React, { Component } from 'react';
import { Route, Redirect, Switch, withRouter } from 'react-router-dom';
import { connect } from 'react-redux'

import {fetch_users} from './actions/userActions.js'
import {fetch_instruments} from './actions/instrumentActions.js'
import {fetch_genres} from './actions/genreActions.js'
import {fetch_families} from './actions/familyActions.js'
import {fetch_posts} from './actions/postActions.js'
import {fetch_tags} from './actions/tagActions.js'
import {loadingPrep} from './components/loadingPrep.js'
import LoginForm from './components/LoginForm.js'
import NewUserForm from './components/NewUserForm.js'
import PostsContainer from './components/posts/PostsContainer.js'
import UsersContainer from './components/users/UsersContainer.js'
import Profile from './components/users/Profile.js'

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
        <Route exact path='/' render={ () => ({
          this.props.loggedIn ? (
            <Redirect to='/posts'/>
          ) : (
            <Redirect to='/login'/>
          )
        })}/>
        <Route path="/login" component={LoginForm}/>
        <Route path='/posts' component={PostsContainer}/>
        <Route exact path="/users" component={UsersContainer}/>
        <Switch>
          <Route path="/users/new" component={NewUserForm}/>
          <Route path="/users/:id" component={Profile}/>
        </Switch>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return ({
    loggedIn: state.users.loggedIn,
  })
}

function mapDispatchToProps(dispatch) {
  return ({
    get_users: ( () => {dispatch(fetch_users())} ),
    get_instruments: ( () => {dispatch(fetch_instruments())} ),
    get_families: ( () => {dispatch(fetch_families())} ),
    get_genres: ( () => {dispatch(fetch_genres())} ),
    get_posts: ( () => {dispatch(fetch_posts())} ),
    get_tags: ( () => {dispatch(fetch_tags())} )
  })
}

export default withRouter(connect(null, mapDispatchToProps)(App));
