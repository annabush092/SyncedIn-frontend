import React from 'react'

function UserFilter(props){
  return(
    <div>
      <form>
        <label>Search users: </label>
        <input type="text" onChange={props.handleInput}/>
      </form>
    </div>
  )
}

export default UserFilter
