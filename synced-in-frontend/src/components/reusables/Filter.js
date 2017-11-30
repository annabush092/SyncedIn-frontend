import React from 'react'
import { Input, Icon } from 'semantic-ui-react'

function Filter(props){
  return(
    <Input icon={<Icon name='search' inverted circular link/>} placeholder='Search' onChange={props.handleInput}/>
  )
}

export default Filter
