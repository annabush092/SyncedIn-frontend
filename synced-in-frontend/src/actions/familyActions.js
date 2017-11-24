function initialize_families(family_arr) {
  return {type: "INITIALIZE_FAMILIES", payload: family_arr}
}

export function fetch_families() {
  return function(dispatch) {
    fetch('http://localhost:3000/api/v1/families')
    .then(res => res.json())
    .then(json => {
      dispatch(initialize_families(json))
    })
  }
}