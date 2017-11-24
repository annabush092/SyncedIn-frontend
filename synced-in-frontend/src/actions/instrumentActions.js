function initialize_instruments(instrument_arr) {
  return {type: "INITIALIZE_INSTRUMENTS", payload: instrument_arr}
}

export function fetch_instruments() {
  return function(dispatch) {
    fetch('http://localhost:3000/api/v1/instruments')
    .then(res => res.json())
    .then(json => {
      dispatch(initialize_instruments(json))
    })
  }
}
