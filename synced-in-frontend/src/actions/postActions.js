function initialize_posts(post_arr) {
  return {type: "INITIALIZE_POSTS", payload: post_arr}
}

function fetching() {
  return {type: "FETCHING"}
}

function doneFetching() {
  return {type: "DONE_FETCHING"}
}

export function fetch_posts() {
  return function(dispatch) {
    dispatch(fetching())
    fetch('http://localhost:3000/api/v1/posts')
    .then(res => res.json())
    .then(json => {
      dispatch(initialize_posts(json))
      dispatch(doneFetching())
    })
  }
}
