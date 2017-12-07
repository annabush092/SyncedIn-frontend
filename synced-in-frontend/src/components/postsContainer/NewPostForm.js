import React from 'react'
import { connect } from 'react-redux'
import uuid from 'uuid'

import { Dropdown } from 'semantic-ui-react'
import { textInputStyle, buttonDiv } from '../reusables/form-style.js'
import { postInputStyle, dropdownStyle, newPostFormStyle, postButtonStyle, newPostPadding } from './new-post-form-style.js'

import {persistPost} from '../../actions/postActions.js'

class NewPostForm extends React.Component {

  state = {
    newContent: "",
    tagOptions: this.props.allTags.map(tag=>(
      {key: uuid(), value: tag.tag_text, text: tag.tag_text}
    )),
    currentTags: []
  }

  onNewContent = (ev) => {
    this.setState({newContent: ev.target.value})
  }

  onNewTag = (ev, {value}) => {
    this.setState({currentTags: value})
  }

  handleAddition = (ev, {value}) => {
    this.setState({tagOptions: this.state.tagOptions.concat({text: value, value: value})})
  }

  handleSubmit = (ev) => {
    ev.preventDefault()
    this.props.publishPost({
      content: this.state.newContent,
      tags: this.state.currentTags
    })
    this.setState({newContent: ""})
  }

  render() {
    return(
      <div style={newPostPadding()}>
        <form style={newPostFormStyle()}>
          <div style={postInputStyle()}>
            <label>Write a new post: </label><br />
            <input required style={textInputStyle()} type="text" placeholder='New Post' onChange={this.onNewContent} value={this.state.newContent}/>
          </div>
          <div style={postInputStyle()}>
            <label>Tag your post: </label><br />
            <Dropdown style={dropdownStyle()} placeholder='Add Tags' multiple search selection allowAdditions options={this.state.tagOptions} onAddItem={this.handleAddition} onChange={this.onNewTag}/><br />
          </div>
          <div style={buttonDiv()}>
            <button style={postButtonStyle()} type='submit' onClick={this.handleSubmit}>
              Publish Post
            </button>
          </div>
        </form>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return ({
    allTags: state.tags
  })
}

function mapDispatchToProps(dispatch) {
  return ({
    publishPost: (postObj) => { dispatch(persistPost(postObj)) }
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(NewPostForm)
