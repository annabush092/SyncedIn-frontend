function initialize_tags(tag_arr) {
  return {type: "INITIALIZE_TAGS", payload: tag_arr}
}

export function fetch_tags() {
  return function(dispatch) {
    fetch('http://localhost:3000/api/v1/tags')
    .then(res => res.json())
    .then(json => {
      dispatch(initialize_tags(json))
    })
  }
}
