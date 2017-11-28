export function postReducer(state=[], action){
  switch(action.type) {
    case "INITIALIZE_POSTS":
      return state.concat(action.payload)
      //action.payload should be an array of post objects
    default:
      return state
  }
}
