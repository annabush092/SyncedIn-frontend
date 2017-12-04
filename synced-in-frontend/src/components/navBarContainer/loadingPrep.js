import React from 'react'
import { Redirect } from 'react-router-dom'

import NavBar from './NavBar.js'

export function loadingPrep(loggedIn, loading, allUsers, ComponentArg) {
  return class extends React.Component {

    loaded = () => {
      if(loading > 0 || Object.keys(allUsers).length < 1) {
        return ( <h1>Loading...</h1> )
      }else {
        return this.signedIn()
      }
    }

    signedIn = () => {
      if(this.props.location.pathname.includes("/login") || this.props.location.pathname.includes("/users/new")) {
        if(loggedIn) {
          return (<Redirect to='/posts'/>)
        }else {
          return ( <ComponentArg/> )
        }
      }else {
        if( !loggedIn && !(localStorage.getItem("annasjwt")) ) {
          return (<Redirect to="/login"/>)
        }else {
          return (
            <div>
              <NavBar/>
              <ComponentArg/>
            </div>
          )
        }
      }
    }

    render() {
      return( this.loaded() )
    }
  }
}
