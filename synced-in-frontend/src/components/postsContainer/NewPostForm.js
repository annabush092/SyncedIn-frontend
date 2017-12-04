import React from 'react'
import { connect } from 'react-redux'
import uuid from 'uuid'
import { Form, Button, Dropdown } from 'semantic-ui-react'

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
      <div>
      <Form size='large'>
          <Form.Input fluid placeholder='New Post' onChange={this.onNewContent} value={this.state.newContent}/>
          <Dropdown placeholder='Add Tags' fluid multiple search selection allowAdditions options={this.state.tagOptions} onAddItem={this.handleAddition} onChange={this.onNewTag}/>
          <Button color='blue' fluid size='large' type='submit' onClick={this.handleSubmit}>Publish Post</Button>
      </Form>
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
