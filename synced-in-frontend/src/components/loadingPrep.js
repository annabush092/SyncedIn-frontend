import React from 'react'
import { Redirect } from 'react-router-dom'

export function loadingPrep(loggedIn, loading, ComponentArg) {
  return class extends React.Component {
    loaded = () => {
      if(loading) {
        return ( <h1>Loading...</h1> )
      } else {
        return ( <ComponentArg/> )
      }
    }
    render() {
      return( this.loaded() )
    }
  }
}

//
// function mapStateToProps(state) {
//   return {
//     loggedIn: state.users.loggedIn,
//     loading: state.users.loading
//   }
// }
