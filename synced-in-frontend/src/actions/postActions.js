function initialize_posts(post_arr) {
  return {type: "INITIALIZE_POSTS", payload: post_arr}
}

export function fetch_posts() {
  return function(dispatch) {
    fetch('http://localhost:3000/api/v1/posts')
    .then(res => res.json())
    .then(json => {
      dispatch(initialize_posts(json))
    })
  }
}
