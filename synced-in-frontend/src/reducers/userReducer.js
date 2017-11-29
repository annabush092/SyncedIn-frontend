export function userReducer(state={
  list: [],
  currentProfile: 0,
  loadProfile: false,
  currentUser: {},
  loggedIn: false,
  loading: false,
  errors: []
}, action){
  switch(action.type) {
    case "FETCHING":
      return {...state, loading: true}
    case "FETCH_ERROR":
      let newErrors = []
      if(!state.errors.includes(action.payload[0])) {
        newErrors = action.payload
      }
      return {...state, loading: false, errors: state.errors.concat(newErrors)}
    case "INITIALIZE_USERS":
      return {...state, list: state.list.concat(action.payload), loading: false}
      //action.payload should be an array of user objects
    case "LOG_IN":
      return {...state, currentUser: action.payload, loggedIn: true, loading: false, errors: []}
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
      return {...state, currentUser: action.payload, list: newList, errors: [], loading: false}
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
