export function instrumentReducer(state=[], action){
  switch(action.type) {
    case "INITIALIZE_INSTRUMENTS":
      return state.concat(action.payload)
      //payload should be an array of instrument objects
    default:
      return state
  }
}
