export function userReducer(state={
  list: [],
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
      console.log("made it to reducer: ", action.payload)
      return {...state, currentUser: action.payload, errors: [], loading: false}

    default:
      return state
  }
}
