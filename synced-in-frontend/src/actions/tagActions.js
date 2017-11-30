function initialize_tags(tag_arr) {
  return {type: "INITIALIZE_TAGS", payload: tag_arr}
}

function fetching() {
  return {type: "FETCHING"}
}

function doneFetching() {
  return {type: "DONE_FETCHING"}
}

export function fetch_tags() {
  return function(dispatch) {
    dispatch(fetching())
    fetch('http://localhost:3000/api/v1/tags')
    .then(res => res.json())
    .then(json => {
      dispatch(initialize_tags(json))
      dispatch(doneFetching())
    })
  }
}
