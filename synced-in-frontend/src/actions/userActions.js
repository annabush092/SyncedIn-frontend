function loading() {
  return {type: "FETCHING"}
}

function fetchError(errorArr) {
  return {type: "FETCH_ERROR", payload: errorArr}
}

function initialize_users(user_arr) {
  return {type: "INITIALIZE_USERS", payload: user_arr}
}

export function fetch_users() {
  return function(dispatch) {
    dispatch(loading())
    fetch('http://localhost:3000/api/v1/users')
    .then(res => res.json())
    .then(json => {
      dispatch(initialize_users(json))
    })
  }
}

function log_in(user_obj) {
  return {type: "LOG_IN", payload: user_obj}
}

export function post_login(username, password) {
  return function(dispatch) {
    dispatch(loading())
    fetch('http://localhost:3000/api/v1/login', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: username
        // password: password
      })
    })
    .then(res => res.json())
    .then(json => {
      if(json.username) {
        dispatch(log_in(json))
      } else {
        dispatch(fetchError(json.errors))
      }
    })
  }
}

function updateUser(json) {
  return {type: "UPDATE_USER", payload: json}
}

export function followUser(currentUserId, followId) {
  console.log("inside followUser reducer")
  return function(dispatch) {
    console.log("inside inside followUser reducer, userId: ", currentUserId)

    dispatch(loading())
    fetch(`http://localhost:3000/api/v1/users/${currentUserId}`, {
      method: "PUT",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        follow_id: followId
      })
    })
    .then(res => res.json())
    .then(json => {
      console.log("response: ", json)
      if(json.username) {
        dispatch(updateUser(json))
      }else{
        dispatch(fetchError(json.errors))
      }
    })
  }
}
