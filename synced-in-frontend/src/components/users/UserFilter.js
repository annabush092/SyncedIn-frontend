import React from 'react'
import { withRouter } from 'react-router-dom'
import { Input, Icon } from 'semantic-ui-react'

function UserFilter(props){
  return(
    <Input icon={<Icon name='search' inverted circular link/>} placeholder='Filter Musicians...' onChange={props.handleInput}/>
  )
}

export default withRouter(UserFilter)
