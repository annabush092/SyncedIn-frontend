import React from 'react'
import { Input, Icon } from 'semantic-ui-react'

function UserFilter(props){
  return(
    <Input icon={<Icon name='search' inverted circular link/>} placeholder='Filter Musicians...' onChange={props.handleInput}/>
  )
}

export default UserFilter
