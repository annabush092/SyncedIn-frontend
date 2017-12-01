import { fetching, doneFetching } from './loadingActions.js'

function initialize_posts(post_arr) {
  return {type: "INITIALIZE_POSTS", payload: post_arr}
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
