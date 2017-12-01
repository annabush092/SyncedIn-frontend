import { fetching, doneFetching } from './loadingActions.js'

function fetchError(errorArr) {
  return {type: "FETCH_ERROR", payload: errorArr}
}



function initialize_users(user_arr) {
  return {type: "INITIALIZE_USERS", payload: user_arr}
}

export function fetch_users() {
  return function(dispatch) {
    dispatch(fetching())
    fetch('http://localhost:3000/api/v1/users')
    .then(res => res.json())
    .then(json => {
      dispatch(initialize_users(json))
      dispatch(doneFetching())
    })
  }
}



function log_in(user_obj) {
  return {type: "LOG_IN", payload: user_obj}
}

export function post_login(username, password) {
  return function(dispatch) {
    dispatch(fetching())
    fetch('http://localhost:3000/api/v1/login', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: username,
        password: password
      })
    })
    .then(res => res.json())
    .then(json => {
      if(json.jwt) {
        localStorage.setItem("annasjwt", json.jwt)
        dispatch(newSession())
      } else {
        dispatch(fetchError(json.errors))
      }
      dispatch(doneFetching())
    })
  }
}

export function newSession() {
  return function(dispatch) {
    dispatch(fetching())
    fetch('http://localhost:3000/api/v1/authentications', {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem("annasjwt")}`
      }
    })
    .then(res=>res.json())
    .then(json => {
      if(json.username) {
        dispatch(log_in(json))
      } else {
        dispatch(fetchError(json.errors))
      }
      dispatch(doneFetching())
    })
  }
}

export function logout() {
  localStorage.removeItem("annasjwt")
  return {type: "LOGOUT"}
}

export function postNewUser(userObj) {
  return function(dispatch) {
    dispatch(fetching())
    fetch('http://localhost:3000/api/v1/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: userObj.username,
        password: userObj.password,
        first_name: userObj.firstName,
        last_name: userObj.lastName
      })
    })
    .then(res=>res.json())
    .then(json=>{
      if(json.jwt) {
        localStorage.setItem("annasjwt", json.jwt)
        dispatch(newSession())
        dispatch(fetch_users())
      } else {
        dispatch(fetchError(json.errors))
      }
      dispatch(doneFetching())
    })
  }
}



function updateUser(json) {
  return {type: "UPDATE_USER", payload: json}
}

export function editUser(userObj) {
  return function(dispatch) {
    dispatch(fetching())
    fetch(`http://localhost:3000/api/v1/users/${userObj.id}`, {
      method: "PUT",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem("annasjwt")}`
      },
      body: JSON.stringify({
        username: userObj.username,
        first_name: userObj.firstName,
        last_name: userObj.lastName
      })
    })
    .then(res => res.json())
    .then(json => {
      if(json.username) {
        dispatch(updateUser(json))
        dispatch(fetch_users())
      }else{
        dispatch(fetchError(json.errors))
      }
      dispatch(doneFetching())
    })
  }
}

export function followUser(currentUserId, followId) {
  return function(dispatch) {
    dispatch(fetching())
    fetch(`http://localhost:3000/api/v1/user_follows`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        followed_id: currentUserId,
        following_id: followId
      })
    })
    .then(res => res.json())
    .then(json => {
      if(json.username) {
        dispatch(updateUser(json))
        dispatch(fetch_users())
      }else{
        dispatch(fetchError(json.errors))
      }
      dispatch(doneFetching())
    })
  }
}

export function unfollowUser(currentUserId, followId) {
  return function(dispatch) {
    dispatch(fetching())
    fetch(`http://localhost:3000/api/v1/delete_user_follows`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        followed_id: currentUserId,
        following_id: followId
      })
    })
    .then(res => res.json())
    .then(json => {
      if(json.username) {
        dispatch(updateUser(json))
        dispatch(fetch_users())
      }else{
        dispatch(fetchError(json.errors))
      }
      dispatch(doneFetching())
    })
  }
}



export function changeProfile(userId) {
  return { type: "CHANGE_PROFILE", payload: userId }
}
export function redirectToProfile() {
  return { type: "REDIRECT_PROFILE" }
}
export function stopRedirectToProfile() {
  return { type: "STOP_REDIRECT_PROFILE" }
}
