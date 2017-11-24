export function familyReducer(state=[], action){
  switch(action.type) {
    case "INITIALIZE_FAMILIES":
      return state.concat(action.payload)
      //action.payload should be an array of family objects
    default:
      return state
  }
}
