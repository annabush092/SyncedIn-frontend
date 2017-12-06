import React from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

import { postListStyle } from './post-card-style.js'

import NewPostForm from './NewPostForm.js'
import Filter from '../reusables/Filter.js'
import {sortPosts} from '../reusables/sortPosts.js'

class PostList extends React.Component {

  state = {
    currentFilter: ""
  }

  handleInput = (ev) => {
    let input = ev.target.value
    this.setState({currentFilter: input})
  }

  filterPosts = (post) => {
    let found = post.tags.find((tag) => (
      tag.tag_text.toLowerCase().includes(this.state.currentFilter.toLowerCase())
    ))
    if(found){
      return true
    }else{
      return false
    }
  }

  postCards = () => (
    this.props.allPosts.reduce((acc, post) => {
      if(this.state.currentFilter.length < 1) {
        acc.push(post)
      }
      else if(this.filterPosts(post)) {
        acc.push(post)
      }
      return acc
    }, [])
  )

  render() {
    return(
      <div style={postListStyle()}>
        <NewPostForm/>
        <Filter handleInput={this.handleInput}/>
        {sortPosts(this.postCards())}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return ({
    allPosts: state.posts,
  })
}

export default withRouter(connect(mapStateToProps)(PostList));
