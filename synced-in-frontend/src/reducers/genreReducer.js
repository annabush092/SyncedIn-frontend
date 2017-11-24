export function genreReducer(state=[], action){
  switch(action.type) {
    case "INITIALIZE_GENRES":
      return state.concat(action.payload)
      //action.payload should be an array of genre objects
    default:
      return state
  }
}
