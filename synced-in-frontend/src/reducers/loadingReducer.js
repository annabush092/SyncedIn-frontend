export function loadingReducer(state= {count: 0} , action){
  switch(action.type) {
    case "FETCHING":
      return {...state, count: (state.count + 1)}
    case "DONE_FETCHING":
      return {...state, count: (state.count - 1)}
    default:
      return state
  }
}
