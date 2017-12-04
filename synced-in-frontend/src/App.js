import React, { Component } from 'react';
import { Route, Redirect, Switch, withRouter } from 'react-router-dom';
import { connect } from 'react-redux'

import {fetch_users, newSession} from './actions/userActions.js'
import {fetch_instruments} from './actions/instrumentActions.js'
import {fetch_genres} from './actions/genreActions.js'
import {fetch_families} from './actions/familyActions.js'
import {fetch_posts} from './actions/postActions.js'
import {fetch_tags} from './actions/tagActions.js'
import {loadingPrep} from './components/navBarContainer/loadingPrep.js'
import LoginForm from './components/LoginForm.js'
import NewUserForm from './components/NewUserForm.js'
import PostList from './components/postsContainer/PostList.js'
import UserList from './components/userListContainer/UserList.js'
import Profile from './components/profileContainer/Profile.js'
import EditUserForm from './components/EditUserForm.js'

class App extends Component {

  componentDidMount() {
    this.props.get_users()
    this.props.get_instruments()
    this.props.get_families()
    this.props.get_genres()
    this.props.get_posts()
    this.props.get_tags()
    if(localStorage.getItem("annasjwt")){
      this.props.startSession()
    }
  }

  render() {
    console.log("errors: ", this.props.errors)
    return (
      <div>
        <Route exact path="/" render={()=>(<Redirect to='/posts'/>)}/>
        <Route exact path="/login" component={loadingPrep(this.props.signedIn, this.props.loading, this.props.allUsers, LoginForm)}/>
        <Route exact path='/posts' component={loadingPrep(this.props.signedIn, this.props.loading, this.props.allUsers, PostList)}/>
        <Route exact path="/users" component={loadingPrep(this.props.signedIn, this.props.loading, this.props.allUsers, UserList)}/>
        <Switch>
          <Route exact path="/users/new" component={loadingPrep(this.props.signedIn, this.props.loading, this.props.allUsers, NewUserForm)}/>
          <Route exact path="/users/:id/edit" component={loadingPrep(this.props.signedIn, this.props.loading, this.props.allUsers, EditUserForm)}/>
          <Route exact path="/users/:id" component={loadingPrep(this.props.signedIn, this.props.loading, this.props.allUsers, Profile)}/>
        </Switch>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return ({
    signedIn: state.users.loggedIn,
    loading: state.loading.count,
    errors: state.users.errors,
    allUsers: state.users.list
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
    startSession: ( () => {dispatch(newSession())} )
  })
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
