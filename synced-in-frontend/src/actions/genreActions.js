import { fetching, doneFetching } from './loadingActions.js'

function initialize_genres(genre_arr) {
  return {type: "INITIALIZE_GENRES", payload: genre_arr}
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
