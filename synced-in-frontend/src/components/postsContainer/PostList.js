import React from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import uuid from 'uuid'
import { Card } from 'semantic-ui-react'

import PostCard from './PostCard.js'
import Filter from '../reusables/Filter.js'

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
      if(this.filterPosts(post)) {
        acc.push(<PostCard key={uuid()} {...post}/>)
      }
      return acc
    }, [])
  )

  render() {
    return(
      <div style={{paddingTop: '60px', paddingLeft: '20px'}}>
        <Filter handleInput={this.handleInput}/>
        <Card.Group style={{paddingTop: '30px'}}>
          {this.postCards()}
        </Card.Group>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return ({
    allPosts: state.posts
  })
}

export default withRouter(connect(mapStateToProps)(PostList));
