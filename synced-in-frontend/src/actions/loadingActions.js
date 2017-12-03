export function fetching() {
  return {type: "FETCHING"}
}

export function doneFetching() {
  return {type: "DONE_FETCHING"}
}

function fetchError(errorArr) {
  return {type: "FETCH_ERROR", payload: errorArr}
}

export function checkForErrors(json, action) {
  return function(dispatch) {
    if(Object.keys(json).includes("errors")) {
      dispatch(fetchError(json.errors))
    } else {
      dispatch(action(json))
    }
  }
}
