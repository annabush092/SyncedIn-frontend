function initialize_users(user_arr) {
  return {type: "INITIALIZE_USERS", payload: user_arr}
}

function loading() {
  return {type: "FETCHING"}
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

function not_authenticated(errorArr) {
  return {type: "NO_AUTH", payload: errorArr}
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
        dispatch(not_authenticated(json.errors))
      }
    })
  }
}
