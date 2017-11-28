export function tagReducer(state=[], action){
  switch(action.type) {
    case "INITIALIZE_TAGS":
      return state.concat(action.payload)
      //action.payload should be an array of tag objects
    default:
      return state
  }
}
