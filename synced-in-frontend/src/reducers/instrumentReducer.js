export function instrumentReducer(state=[], action){
  switch(action.type) {
    case "INITIALIZE_INSTRUMENTS":
      return action.payload
    default:
      return state
  }
}
