import React from 'react'
import { connect } from 'react-redux'

import NavBar from '../NavBar.js'
import PostList from './PostList.js'

class PostsContainer extends React.Component {
  render() {
    return(
      <div>
        <NavBar/>
        Welcome to PostsContainer
      </div>
    )
  }
}

export default connect()(PostsContainer)
