import { fetching, doneFetching, checkForErrors } from './loadingActions.js'

function initialize_instruments(instrument_arr) {
  return {type: "INITIALIZE_INSTRUMENTS", payload: instrument_arr}
}

export function fetch_instruments() {
  return function(dispatch) {
    dispatch(fetching())
    fetch('http://localhost:3000/api/v1/instruments')
    .then(res => res.json())
    .then(json => {
      dispatch(checkForErrors(json, initialize_instruments))
      dispatch(doneFetching())
    })
  }
}
