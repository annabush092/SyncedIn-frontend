import { fetching, doneFetching, checkForErrors } from './loadingActions.js'

function initialize_posts(post_arr) {
  return {type: "INITIALIZE_POSTS", payload: post_arr}
}

export function fetch_posts() {
  return function(dispatch) {
    dispatch(fetching())
    fetch('http://localhost:3000/api/v1/posts')
    .then(res => res.json())
    .then(json => {
      dispatch(checkForErrors(json, initialize_posts))
      dispatch(doneFetching())
    })
  }
}
