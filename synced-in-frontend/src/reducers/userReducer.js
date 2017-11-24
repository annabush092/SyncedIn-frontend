export function userReducer(state={ list: [], currentUser: {}, loading: true }, action){
  switch(action.type) {
    case "INITIALIZE_USERS":
      return {...state, list: state.list.concat(action.payload), loading: false}
      //action.payload should be an array of user objects
    default:
      return state
  }
}
