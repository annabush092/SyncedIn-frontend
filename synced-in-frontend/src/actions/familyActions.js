function initialize_families(family_arr) {
  return {type: "INITIALIZE_FAMILIES", payload: family_arr}
}

function fetching() {
  return {type: "FETCHING"}
}

function doneFetching() {
  return {type: "DONE_FETCHING"}
}

export function fetch_families() {
  return function(dispatch) {
    dispatch(fetching())
    fetch('http://localhost:3000/api/v1/families')
    .then(res => res.json())
    .then(json => {
      dispatch(initialize_families(json))
      dispatch(doneFetching())
    })
  }
}
