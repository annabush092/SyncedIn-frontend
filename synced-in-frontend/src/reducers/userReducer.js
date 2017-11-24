export function userReducer(state={ list: [], currentUser: {} }, action){
  switch(action.type) {
    case "INITIALIZE_USERS":
      return {...state, list: state.list.concat(action.payload)}
      //action.payload should be an array of user objects
    default:
      return state
  }
}
