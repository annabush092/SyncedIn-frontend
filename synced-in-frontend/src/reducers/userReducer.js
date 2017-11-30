export function userReducer(state={
  list: [],
  currentProfile: 0,
  loadProfile: false,
  currentUser: {},
  loggedIn: false,
  errors: []
}, action){
  switch(action.type) {
    case "FETCH_ERROR":
      let newErrors = []
      if(!state.errors.includes(action.payload[0])) {
        newErrors = action.payload
      }
      return {...state, errors: state.errors.concat(newErrors)}
    case "INITIALIZE_USERS":
      return {...state, list: action.payload}
    case "LOG_IN":
      return {...state, currentUser: action.payload, loggedIn: true, errors: []}
    case "LOGOUT":
      return {...state, currentUser: {}, loggedIn: false}
    case "UPDATE_USER":
      let newList = state.list.map((user)=>{
        if(user.id === state.currentUser.id) {
          return action.payload
        }else {
          return user
        }
      })
      return {...state, currentUser: action.payload, list: newList, errors: [] }
    case "CHANGE_PROFILE":
      return {...state, currentProfile: action.payload}
    case "REDIRECT_PROFILE":
      return {...state, loadProfile: true}
    case "STOP_REDIRECT_PROFILE":
      return {...state, loadProfile: false}
    default:
      return state
  }
}
