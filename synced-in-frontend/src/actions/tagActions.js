import { fetching, doneFetching, checkForErrors } from './loadingActions.js'

function initialize_tags(tag_arr) {
  return {type: "INITIALIZE_TAGS", payload: tag_arr}
}

export function fetch_tags() {
  return function(dispatch) {
    dispatch(fetching())
    fetch('http://localhost:3000/api/v1/tags')
    .then(res => res.json())
    .then(json => {
      dispatch(checkForErrors(json, initialize_tags))
      dispatch(doneFetching())
    })
  }
}
