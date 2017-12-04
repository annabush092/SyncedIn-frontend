export function postReducer(state=[], action){
  switch(action.type) {
    case "INITIALIZE_POSTS":
      return action.payload
    case "ADD_POST":
      return state.concat(action.payload)
    default:
      return state
  }
}
