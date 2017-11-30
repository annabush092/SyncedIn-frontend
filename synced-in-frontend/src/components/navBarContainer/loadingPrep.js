import React from 'react'
import { Redirect } from 'react-router-dom'

import NavBar from './NavBar.js'

export function loadingPrep(loggedIn, loading, ComponentArg) {
  return class extends React.Component {

    loaded = () => {
      if(loading > 0) {
        return ( <h1>Loading...</h1> )
      }else {
        if(loggedIn) {
          return (
            <div>
              <NavBar/>
              <ComponentArg/>
            </div>
          )
        }else {
          return ( <ComponentArg/> )
        }
      }
    }

    signedIn = () => {
      if(this.props.location.pathname.includes("/login") || this.props.location.pathname.includes("/users/new")) {
        if(loggedIn) {
          return (<Redirect to='/posts'/>)
        }else {
          return this.loaded()
        }
      }else {
        if(!loggedIn) {
          return (<Redirect to="/login"/>)
        }else {
          return this.loaded()
        }
      }
    }

    render() {
      return( this.signedIn() )
    }
  }
}
