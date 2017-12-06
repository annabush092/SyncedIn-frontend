import React from 'react'

import { filterStyle, filterDiv } from './form-style.js'

function Filter(props){
  return(
    <div style={filterDiv()}>
      <label>Search {props.searchType}: </label>
      <input style={filterStyle()} type="text" placeholder='Search' onChange={props.handleInput}/>
    </div>
  )
}

export default Filter
