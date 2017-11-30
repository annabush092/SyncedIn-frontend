function initialize_genres(genre_arr) {
  return {type: "INITIALIZE_GENRES", payload: genre_arr}
}

function fetching() {
  return {type: "FETCHING"}
}

function doneFetching() {
  return {type: "DONE_FETCHING"}
}

export function fetch_genres() {
  return function(dispatch) {
    dispatch(fetching())
    fetch('http://localhost:3000/api/v1/genres')
    .then(res => res.json())
    .then(json => {
      dispatch(initialize_genres(json))
      dispatch(doneFetching())
    })
  }
}
